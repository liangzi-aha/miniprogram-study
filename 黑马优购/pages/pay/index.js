
/**
 * 1、页面加载的时候
 *    1 从缓存中获取购物车数据 渲染到页面中
 *      这些数据 checked = true
 * 2、微信支付
 *    1 那些人 哪些账号 可以实现微信支付 
 *    2 企业账号、企业账号的小程序后台中 必须给卡覅在 添加上白名单
 *    3 一个appid可以绑定多个开发者
 *    4 这些开发者就可以公用这个appid 和 它的开发权限了
 * 3、调用 wx.login() 获取小程序登录成功的code
 * 4、发送请求，传入code 获取用户的token
 * 5、请求头携带token，生成订单
 * 6、生成的订单号，发起预支付
 * 7、支付接口调用
 * 8、支付成功，删除本地支付过得商品数据，修改本地数据
 */

import { request } from '../../request/index.js';
import { getUserProfile, login, requestPayment, showToast } from '../../utils/asyncWx.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    cart: [],
    totalPrice: 0,
    totalNum: 0
  },
  onShow() {
    // 1、获取缓存中的收货地址信息
    const address = wx.getStorageSync('address') || {};

    let cart = wx.getStorageSync('cart') || [];

    //  过滤后的购物车数组
    cart = cart.filter(v => v.checked);

    // 1 总价格
    let totalPrice = 0;
    // 2 总数量
    let totalNum = 0;
    cart.forEach(v => {
      totalPrice += v.num * v.goods_price;
      totalNum += v.num;
    });

    this.setData({
      cart,
      totalPrice,
      totalNum,
      address
    });
  },
  //  去支付，获取用户信息
  // 如果不想通过 button 绑定 open-type，直接调用授权，想在调用授权时实现自己的业务逻辑，在button上绑定点击事件（必须是button上绑定点击事件，才可以使用wx.getUserProfile），不使用open-type属性，事件中调用 wx.getUserProfile 即可获取用户信息，wx.getUserProfile事件每次都会有弹出框
  async goToPay() {
    try {
      // 1、判断用户是否授权过
      const userInfo = wx.getStorageSync('userInfo');

      if (userInfo) {
        console.log('已经授权');
      } else {
        const res = await getUserProfile({
          desc: '绑定订单信息',
        });
        // 2、用户信息存入本地
        wx.setStorageSync('userInfo', res);
      }

      // 3、获取小程序登录成功的code值
      const { code } = await login();
      // 4、发送请求 获取用户的token
      const { encryptedData, rawData, iv, signature } = wx.getStorageSync('userInfo');
      const loginParams = {
        encryptedData, rawData, iv, signature,
        code
      }
      // 获取token失败null，不是企业账号
      // const res = await request({
      //   url:'/users/wxlogin',
      //   data:loginParams,
      //   method: 'post'
      // })

      // 存入写死的token
      const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIzLCJpYXQiOjE1NjQ3MzAwNzksImV4cCI6MTAwMTU2NDczMDA3OH0.YPt-XeLnjV-_1ITaXGY2FhxmCe4NvXuRnRB8OMCfnPo';
      wx.setStorageSync('token', token);

      // 5、创建订单
      // const header = { Authorization: token };
      // 准备请求体参数
      const order_price = this.data.totalPrice;
      const consignee_addr = this.data.address.all;
      // 订单数组
      const cart = this.data.cart;
      let goods = cart.map(v => {
        return {
          goods_id: v.goods_id,
          goods_number: v.num,
          goods_prive: v.goods_price
        }
      });

      console.log(goods);

      // 生成订单
      const { order_number } = await request({
        url: "/my/prders/create",
        method: 'post',
        data: {
          order_price,
          consignee_addr,
          goods
        }
      })

      // 6、发起 预支付接口
      const { pay } = await request({
        url: "/my/orders/req_unifiedorder",
        method: 'post',
        data: {
          order_number
        }
      })

      // 7、发起微信支付
      await requestPayment(pay);
      // 8、查询后台 订单状态
      const res = await request({
        url: "/my/orders/chkOrder",
        method: 'post',
        data: {
          order_number
        }
      });
      await showToast({
        title:'支付成功'
      });
      // 删除缓存中 已经支付了的商品
      let newCart = wx.getStorageSync('cart');
      newCart = newCart.filter(v=>!v.checked);
      wx.setStorageSync('cart', checked);
        
      // 支付成功跳转订单页面
      wx.navigateTo({
        url: '/pages/order/index',
      });

      console.log(res);
    } catch (error) {
      await showToast({
        title:'支付失败'
      });
    }
  }
})










