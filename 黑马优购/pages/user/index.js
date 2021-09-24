
import { getUserProfile } from '../../utils/asyncWx.js'
// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    const { userInfo } = wx.getStorageSync('userInfo');
    const collect = wx.getStorageSync('collect') || [];
    
    console.log(userInfo,collect)

    this.setData({
      userInfo,
      collectNum: collect.length,
    });
  },
 async handleGetUserInfo(){
   const userAllInfo = await getUserProfile({
    desc:'获取用户信息登录账号'
   });
   console.log(userAllInfo)
   wx.setStorageSync('userInfo', userAllInfo);

   this.setData({
    userInfo: userAllInfo.userInfo
   })
  }
})