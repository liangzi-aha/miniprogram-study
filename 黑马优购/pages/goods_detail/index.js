/**
 * 页面的初始化数据
 * 1、点击轮播图 预览大图
 *    1、给轮播图添加点击事件
 *    2、调用小程序的api previewImage
 * 3、点击加入购物车
 *    1、先绑定点击事件
 *    2、获取缓存中的购物车数据  数组格式
 *    3、判断 当前的商品是否已经存在于购物车
 *    4、已经存在了 修改商品数据 执行购物车数据++ 重新吧购物车数组 填充回缓存中
 *    5、不存在于购物车的数组 直接给购物车数组添加一个新元素 新元素 带上 购买数量属性 num 重新吧购物车数组 填充回缓存中
 *    6、弹出用户提示
 * 4、商品收藏
 *    1、页面onshow 的时候 加载缓存中的商品收藏数据
 *    2、去缓存信息进行判断，渲染
 *    3、收藏按钮添加点击事件
 */
import { request } from '../../request/index';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObject:{},
    isColect: false
  },
  // 商品信息
  goodsInfo:{},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { goods_id } = options;
    console.log(goods_id);
    this.getGoodsDetail(goods_id);
  },
  onShow: function(){
    let pages = getCurrentPages();
    let { goods_id } = pages[pages.length - 1].options;
    this.getGoodsDetail(goods_id);
  },
  // 获取商品详情数据
  async getGoodsDetail(goods_id){
    const goodsObject = await request({
      url:'/goods/detail',
      data:{ goods_id }
    });
    this.goodsInfo = goodsObject;
    // 获取缓存中的商品收藏数组
    let collect = wx.getStorageSync('collect') || [];
    
    // 判断当前商品是否被收藏了
    let isColect = collect.some(v=>v.goods_id === this.goodsInfo.goods_id)
    this.setData({
      goodsObject:{
        goods_name: goodsObject.goods_name,
        goods_price: goodsObject.goods_price,
        // iphone 部分手机不识别 webp图片格式
        // 最好后台进行修改数据
        // 临时自己修改
        // 确保 后台存在 1.webp 和 1.jpg图片
        goods_introduce: goodsObject.goods_introduce.replace(/\.webp/g,'.jpg'),
        pics: goodsObject.pics,
      },
      isColect
    })
  },
  // 点击轮播图 放大预览
  PrevewImage(e){
    // 1、先构造要预览的图片数组
    const urls = this.goodsInfo.pics.map(v=>v.pics_mid)
    const current = e.currentTarget.dataset.url;
    // 2、接收传过来的url
    wx.previewImage({
      current: current,
      urls: urls,
    });
      
    console.log('预览')
  },
  // 点击 加入购物车
  handleCartAdd(){
    // 1、获取缓存中的购物车数据
    let cart = wx.getStorageSync('cart') || [];
    // 2、判断商品对象是否存在于购物车数组中
    let index = cart.findIndex(v=>v.goods_id === this.goodsInfo.goods_id
    );

    if(index === -1){
      // 3、不存在 第一次添加
      this.goodsInfo.num = 1;
      this.goodsInfo.checked = true;
      cart.push(this.goodsInfo);
    }else{
      // 4、已存在购物车数据 执行 num ++
      cart[index].num++;
    }
    // 5、把购物车重新添加回缓存中
    wx.setStorageSync('cart', cart);
    // 6、弹窗提示
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      mask: true
    });
      
  },
  // 点击收藏图标
  handleColect(){
    let isColect = false;
    // 1 获取缓存商品收藏数组
    let collect = wx.getStorageSync('collect') || [];
    // 判断该商品是否被收藏过
    let index = collect.findIndex(v=>v.goods_id === this.goodsInfo.goods_id);
    // 当 isCollect === true 表示已经收藏过了
    if(index !== -1){
      // 能找到已经收藏了
      collect.splice(index,1);
      isColect = false;
      wx.showToast({
        title: '取消成功',
        icon: 'none',
        mask: true,
      });
    } else{
      // 没有被收藏
      collect.push(this.goodsInfo);
      isColect = true;
      wx.showToast({
        title: '收藏成功',
        icon: 'none',
        mask: true,
      });
    }

    // 4 把数组存入到缓存中
    wx.setStorageSync('collect', collect);
    // 5 修改data冲的属性 isCollect
    this.setData({
      isColect,
      collect
    });
  }
})