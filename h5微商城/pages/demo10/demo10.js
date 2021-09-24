// pages/demo10/demo10.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad');
    // onLoad 发送异步请求来初始化页面数据
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');
    // 
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady');
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载 也是可以通过点击超链接来颜色
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   * 需要有滚动条才行
   */
  onReachBottom: function () {
    console.log('onReachBottom');
    // 上拉加载下一页数据
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('onShareAppMessage');
  },
  /**
   * 页面滚动就可以触发
   */
  onPageScroll(){
    console.log('onPageScroll');
  },
  /**
   * 页面尺寸发生改变的时候 触发
   * 小程序发生了 横屏 竖屏时触发
   */
  onResize(){
    console.log('onResize');
  },
  /**
   * 必须邀请单签页面时tabbar 页面
   * 点击的自己的tab item 的时候触发
   */
  onTabItemTap(){
    console.log('onTabItemTap')
  }
})