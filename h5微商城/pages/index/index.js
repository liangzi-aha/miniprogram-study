//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    listdata:'',
    getProdGoodsList:[], //人身必备保单数据
    hotProduct: ['旅游出行', '女性专属', '少儿保障','家庭保障'],
    activity:0,
    hotProductList:[],  //保险热卖
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    // banner
    wx.request({
      url: "https://www.zgbxjj.com/openapi/h5/index/getadvlistbycid",
      data:{
        params: { "acid": 71 }
      },
      success: function (res) {
        if (res.data.code == 20000){
          var data = res.data.data.map(result=>{
            return {
              adv_content_pic: result.adv_content_pic.substr(3),
              follow_up_content: result.follow_up_content.split("?")[1],
            };
          })

          that.setData({
            listdata: data
            //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
          })
        }
      }
    });
    // 人身必备保单
    wx.request({
      method: 'post',
      url: "https://www.zgbxjj.com/openapi/h5/product/getProdGoodsList",
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data: {
        params: '{ classTag: "人生必备保单" }'
      },
      success: function (res) {
        if (res.data.code == 20000) {
          that.setData({
            getProdGoodsList: res.data.data
          });
        }
      }
    })
    // 产品热卖
    this.switchHotProduct()
  },
  // 切换热卖产品
  switchHotProduct(e){
    var that = this;
    var name = "旅游出行";
    if(e){
      name = e.detail.title;
    }
    
    // 保险热卖
    wx.request({
      method: 'post',
      url: "https://www.zgbxjj.com/openapi/h5/product/getProdGoodsList",
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data: {
        params: '{ classTag: "' + name +'","currentPage":1 }'
      },
      success: function (res) {
        if (res.data.code == 20000) {
          that.setData({
            hotProductList: res.data.data.list
          });
        }
      }
    })
  },
  development(){
    wx.showToast({
      title: "正在开发中",
      icon: 'none',
      duration: 2000
    })
  },
  toProductList(e){
    var app = getApp()
    console.log(e.currentTarget.dataset.index)
    app.globalData.activityTabbar = e.currentTarget.dataset.index;
    app.globalData.activityTabName = e.currentTarget.dataset.tabname;
    wx.switchTab({
      url: '/pages/productList/productList'
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        currentTab: 0  //数字是当前页面在tabbar的索引,如我的查询页索引是2，因此这边为2，同理首页就为0，审批页面为1
      })
    }
  }
})
