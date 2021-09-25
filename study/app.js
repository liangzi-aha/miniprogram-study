// app.js
App({
  // 1、应用第一次启动时就会触发事件
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    });

    // js 的方式跳转页面
    // wx.navigateTo({
    //   url: '/11/22/33',
    // });
      
  },
  // 2 应用被用户看到
  onShow(){
    // 对应用的数据或页面效果重置
    // console.log('onShow');
  },
  // 3 应用被隐藏触发
  onHide(){
    // 暂停或清除定时器
    // console.log('应用被隐藏')
  },
  // 4 当应用的代码发生了错误的时候 触发
  onError(err){
    // 在应用发生错误时，收集用户错误信息，通过异步请求 将错误信息发送给后台
    console.log('onerror');
    // console.log(err);
  },
  // 页面找不到就会触发
  // 应用第一次启动的时候，如果找不到第一个入口页面 才会触发
  onPageNotFound(){
    // 如果页面不存在了 通过js的方式来重新跳转页面 重新跳转另外一个首页
    console.log("onPageNotFound");
    wx.navigateTo({
      url: '/pages/demo09/demo09',
    });
      
  },
  // 全局data
  globalData: {
    userInfo: null
  }
})
