
import { getUserProfile } from '../../utils/asyncWx.js'
// pages/login/index.js
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

  },
 async handleGetUserInfo(){
   const userInfo = await getUserProfile({
    desc:'获取用户信息登录账号'
   });
   console.log(userInfo)
   wx.setStorageSync('userInfo', userInfo);
   
  }
})