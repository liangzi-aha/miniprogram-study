/**
 * 1、当页面被打开的时候 onShow
 *    1 获取url上的参数
 *    2 根据type 去发送请求获取订单数据
 *    3 渲染页面
 * 2、点击不同的标题 重新发送请求来获取和渲染数据
 */
// 引入用来发送请求的方法
import { request } from '../../request/index';
import { login } from '../../utils/asyncWx.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        value:"全部",
        isActive: true
      },
      {
        id:1,
        value:"代付款",
        isActive: false
      },
      {
        id:2,
        value:"待发货",
        isActive: false
      },
      {
        id:3,
        value:"退款/退货",
        isActive: false
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载  onLoad默认可以获取 options参数
   */
  onLoad: function (options) {
    console.log(options)
  },
  // onShow 无法获取options参数
  async onShow(){
    const token = wx.getStorageSync('token');

    if(!token){
      // 3、获取小程序登录成功的code值
      const { code } = await login();
      // 4、发送请求 获取用户的token
      const { encryptedData, rawData, iv, signature } = wx.getStorageSync('userInfo');
      const loginParams = {
        encryptedData, rawData, iv, signature,
        code
      }
      // 获取token失败null，不是企业账号
      const res = await request({
        url:'/users/wxlogin',
        data:loginParams,
        method: 'post'
      })

      // 存入写死的token
      const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIzLCJpYXQiOjE1NjQ3MzAwNzksImV4cCI6MTAwMTU2NDczMDA3OH0.YPt-XeLnjV-_1ITaXGY2FhxmCe4NvXuRnRB8OMCfnPo';
      wx.setStorageSync('token', token);
    }
      

    // 获取当前的小程序的页面栈-数组 长度最大是10页面
    // 数组中 索引最大的就是当前页面，也就是最后一个
    let pages =  getCurrentPages();
    let { type } = pages[pages.length - 1].options;
    
    this.getOrders(type);
  },
  // 获取订单列表的方法
  async getOrders(type){
    const res = await request({
      url:'/my/orders/all',
      data:{
        type,
      }
    })
  },
   // 标题点击事件 从子组件传递过来
   handleTabsItemChange(e){
    // 1、获取被点击的标题索引
    const { index } = e.detail;
    console.log(e);
    // 2、修改源数组
    let { tabs } = this.data;
    tabs.forEach((element,i) => index === i ? element.isActive =  true :  element.isActive =  false);
    // 3、赋值
    this.setData({
      tabs
    })
  },
})