// pages/productDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productId: '', //产品id
    productDetails: {},  //产品详情
    dataLoadSuccess: false,
    activityButton: 0,
    activeNames: [],
    activityPlanId:'',  //计划id
    goodFeatureOfProduct:'', //产品特色
    showSpecification:false, //规格显示状态
    SpecificationStatus:[], //规格展示状态
    SpecificationIdArr: [], //展示规格ID数组
    price:'', //价格
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var that = this;
    this.setData({
      "productId": options.productId
    });

    // 获取产品详情
    wx.request({
      method: 'post',
      url: 'https://www.zgbxjj.com/openapi/h5/product/details',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data: {
        params: '{ productId: "' + this.data.productId + '"}'
      },
      success: function (res) {
        if (res.data.code == 20000) {
          that.setData({
            "productDetails": res.data.data,
            "dataLoadSuccess": true,
            "activityPlanId": res.data.data.prodPlanList[0].id,
            "goodFeatureOfProduct": res.data.data.prodGoods.goodFeatureOfProduct.replace('/hsFileData','https://www.zgbxjj.com/hsFileData'),
          });

          // 初始化规格数组
          that.InitSpecification();
        }
      }
    });
  },
  // 初始化规格数组
  InitSpecification(){
    var that = this;
    // 初始化规格数组（选中规格下标数组，选中规格id数组）
    that.setData({
      "SpecificationStatus": new Array(that.data.productDetails.prodPlanList[that.data.activityButton].planAttrKeyList.length).fill(0),
      "SpecificationIdArr": new Array(that.data.productDetails.prodPlanList[that.data.activityButton].planAttrKeyList.length).fill(0)
    })

    // 获取默认选中规格id
    var SpecificationIdArrTemp = that.data.SpecificationIdArr;
    that.data.productDetails.prodPlanList[that.data.activityButton].planAttrKeyList.forEach((ele, index) => {
      SpecificationIdArrTemp[index] = ele.planAttrValList[0].id;
    });

    that.setData({
      "SpecificationIdArr": SpecificationIdArrTemp
    });

    // 价格试算
    this.PricesTrial();
  },
  // 保障清单
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    })
  },
  // 切换计划
  switchBtn(e) {
    this.setData({
      "activityButton": e.target.dataset.buttonindex,
      "activityPlanId": e.target.dataset.planid,
    });
    this.InitSpecification();
  },
  // 购买弹出框
  purchase(){
    var that = this;
    wx.nextTick(function(){
      that.setData({
        'showSpecification': true,
      })
    })
  },
  // 关闭购买弹出框
  onClose(){
    this.setData({
      'showSpecification': false,
    })
  },
  // 切换规格
  switchSpecifications(e){
    console.log(e.currentTarget.dataset.specificationid);
    var SpecificationStatusTemp = this.data.SpecificationStatus;
    SpecificationStatusTemp[e.currentTarget.dataset.pindex]  = e.currentTarget.dataset.cindex;
    var SpecificationIdArrTemp = this.data.SpecificationIdArr;
    SpecificationIdArrTemp[e.currentTarget.dataset.pindex] = e.currentTarget.dataset.specificationid;
    this.setData({
      "SpecificationStatus": SpecificationStatusTemp,
      "SpecificationIdArr": SpecificationIdArrTemp
    });
    // 价格试算
    this.PricesTrial();
    console.log(this.data.SpecificationIdArr)
  },
  // 价格试算
  PricesTrial(){
    var that = this;
    // 价格试算
    wx.request({
      method: 'post',
      url: 'https://www.zgbxjj.com/openapi/h5/product/priceCalculation',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data: {
        params: '{ productId: "' + this.data.productId + '",planId:"' + this.data.activityPlanId + '",value:"' + this.data.SpecificationIdArr.join() +'"}'
      },
      success: function (res) {
        if (res.data.code == 20000) {
          that.setData({
            "price":res.data.data,
          })
        }else{
          that.setData({
            "price": '',
          });
          wx.showToast({
            title: res.data.message,
            icon: 'none',
            duration: 2000
          });
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})