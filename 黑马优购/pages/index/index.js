// 引入用来发送请求的方法
import { request } from '../../request/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数组
    swiperList: [],
    // 导航数据
    CateList: [],
    // 楼层数据
    FloorList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取轮播图数据
    this.getSwiperList();
    // 获取导航栏数据
    this.getCateList();
    // 获取导航栏数据
    this.getFloorList();
  },
  // 获取轮播图数据
  getSwiperList() {
    // 1、发送异步请求获取轮播图信息 优化请求使用promise
    request({
      url: '/home/swiperdata',
      method: 'GET',
      dataType: 'json',
    }).then(res => {
      this.setData({
        swiperList: res
      })
    }, err => {
      console.log('报错了')
    })
  },
  // 获取导航栏数据
  getCateList() {
    // 1、发送异步请求获取轮播图信息 优化请求使用promise
    request({
      url: '/home/catitems',
      method: 'GET',
      dataType: 'json',
    }).then(res => {
      this.setData({
        CateList: res
      })
    }, err => {
      console.log('报错了')
    })
  },
  // 获取导航栏数据
  getFloorList() {
    // 1、发送异步请求获取轮播图信息 优化请求使用promise
    request({
      url: '/home/floordata',
      method: 'GET',
      dataType: 'json',
    }).then(result => {
      for (let k = 0; k < result.length; k++) {
          result[k].product_list.forEach((v, i,arr) => {
            arr[i].navigator_url = v.navigator_url.replace('?','/index?');
          });
      };
      
      this.setData({
        FloorList: result
      })
    }, err => {
      console.log('报错了')
    })
  }
})