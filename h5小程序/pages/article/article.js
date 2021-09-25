// pages/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    articleMessage:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      "id": options.id,
      "articleMessage":'',
    });

      wx.request({
        url: 'https://www.zgbxjj.com/openapi/classroom/studyClassroomDetail',
        dataType:'json',
        method: 'post',
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        data: {
          id: that.data.id
        },
        success:function(res){
          that.setData({
            "articleMessage":res
          })
          console.log(res);
        }
      })
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