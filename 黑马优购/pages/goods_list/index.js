// 引入用来发送请求的方法
import { request } from '../../request/index';

/**
 * (1)、用户上滑页面 滚动条触底 开始加载下一页数据
 * 1、找到混动条触底事件
 * 2、判断还有没有下一页数据 
 *    1、获取总页数
 *    2、当前页码
 * 3、没有下一页 弹出一个提示
 * 4、有下一页 来加载下一页数据
 *    1、当前页码++
 *    2、重新发送请求
 *    3、数据请求回来 要对data中的数据 进行拼接
 * (2)、下拉刷新事件  需要在页面的json文件中开启一个配置项，找到触发下拉的事件
 *    1、重置 数据
 *    2、重置页码 设置为1
 *    3、重新发送请求
 *    4、数据请求回来 需要手动关闭 等待效果
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        value:"综合",
        isActive: true
      },
      {
        id:1,
        value:"销量",
        isActive: false
      },
      {
        id:2,
        value:"价格",
        isActive: false
      },
    ],
    goods_list:[],
  },
  // 接口请求参数
   QueryParams:{
     query:"",
     cid:"",
     pagenum:1,
     pagesize:10
   },
  //  总页数
  totalPages: 1,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取url参数
    console.log(options);
    this.QueryParams.cid = options.cid || "";
    this.QueryParams.query = options.query || "";

    this.getGoodsList();
  },

  // 获取商品列表数据
  async getGoodsList(){
    const res = await request({
      url: "/goods/search",
      data: this.QueryParams
    });

    // 获取总条数
    const total = res.total;
    this.totalPages = Math.ceil(total / this.QueryParams.pagesize);
    // console.log(this.totalPages);
    this.setData({
      // 拼接数组
      goods_list: [...this.data.goods_list,...res.goods]
    })
    // 关闭下拉刷新的窗口  如果没有调用下拉刷新窗口 直接关闭也不会报错
    wx.stopPullDownRefresh();
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
  // 页面上滑 滚动条触底事件
  onReachBottom: function() {
    // 1、判断是否有写一页数据
    if(this.QueryParams.pagenum >= this.totalPages){
      // 没有下一页数据
      // console.log("没有下一页数据")
      wx.showToast({
        title: '没有下一页数据'
      });
        
    }else{
      this.QueryParams.pagenum++;
      this.getGoodsList();
    }
    console.log('触底加载')
  },
  // 下拉刷新事件
  onPullDownRefresh(){
    console.log('刷新');
    // 重置数组
    this.setData({
      goods_list: []
    })
    // 重置页码
    this.QueryParams.pagenum = 1;
    // 发送请求
    this.getGoodsList();
  }
})

  