/**
 * 1、获取用户的收货地址
 *    1、绑定点击事件
 *    2、调用小程序内置api 获取用户的收货地址 wx.chooseAddress
 *    3、把获取的用户地址存到本地
 * 2、获取本地存储的地址数据
 *    1、把数据设置给data中的一个变量
 * 3、onShow 
 *    1 获取缓存中的购物车数组
 *    2 把购物车数据 填充到data中
 * 4、全选的实现
 *    1 onShow 获取缓存的购物车数据
 *    2 根据购物车中的商品数据  所有的商品都被选中了 checked = true 全选中
 * 5、总价格和总数量
 *    1 都需要商品被选中 我们才那他来计算
 *    2 获取购物车数组
 *    3 遍历
 *    4 判断商品是否被选中
 *    5 总价格 += 商品的单价 * 商品的数量
 *    5 总数量 += 商品的数量
 *    6 把计算后的价格和数量 设置会data 中即可
 * 6、商品的选中功能
 *    1 绑定chagne事件
 *    2 获取到被修改的商品对象
 *    3 商品对象的选中状态 取反
 *    4 重新填充回data中和缓存中
 *    5 重新计算全选 总价格 总数量
 * 7、全选和反选功能
 *    1 全选复选框绑定事件 chagne
 *    2 获取data中的全选变量 allChecked
 *    3 全选取反 allChecked = !allChecked
 *    4 遍历购物车数组 让里面 商品 选中状态跟随  allChecked 改变而改变
 *    5 把购物车数组 和 allChecked 重新设置回data中 把购物车重新设置回 缓存中
 * 8、商品数量的编辑
 *    1、"+" "-" 按钮绑定同一个点击事件 区分的关键 自定义属性
 *    2、传递被点击的商品 id goods_id
 *    3、获取data 中的购物车数组 来获取需要被修改的商品对象
 *    4、直接修改商品兑现的数量 num d当商品数量为1时，点击减号 提示用户是否删除该商品
 *    5、把cart 数组 重新设置回 缓存中 和 data 中 this.setCart
 * 9、点击结算
 *    1 判断用户有没有收货地址信息
 *    2 判断用户有没有选购商品
 *    3 经过以上的验证 跳转到支付页面！
 */
import { showModule,showToast } from '../../utils/asyncWx.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    cart: [],
    allChecked: false,
    totalPrice: 0,
    totalNum: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onShow() {
    // 1、获取缓存中的收货地址信息
    const address = wx.getStorageSync('address') || {};

    const cart = wx.getStorageSync('cart') || [];

    // 1 计算全选
    // every数组方法 会遍历 会接收一个回调函数 那么每一个回调函数都返回true 那么 every 方法的返回值为true
    // 只要有一个返回 false 就不执行循环了，返回false
    // 空数组调用了 avery 方法，返回true
    // const allChecked = cart.length ? cart.every(v=>v.checked) : false;

    this.setData({ address });
    this.setCart(cart);

  },
  // 点击收货地址
  handleChooseAddress() {
    console.log('点击收货地址')
    wx.chooseAddress({
      success: (result) => {
        result.all = result.provinceName + result.cityName + result.countyName + result.detailInfo
        wx.setStorageSync('address', result);
      }
    });

  },
  // 商品的选中
  handleItemChange(e) {
    // 1 获取被修改的商品的id
    const goods_id = e.currentTarget.dataset.id;
    console.log(goods_id);
    // 2 获取购物车数组
    let { cart } = this.data;
    // 3 找到被修改的商品对象
    let index = cart.findIndex(v => v.goods_id === goods_id);
    cart[index].checked = !cart[index].checked;
    // 5 6 把购物车数据重新设置回data中和缓存中
    this.setCart(cart);
  },
  // 设置购物车状态 同时 重新计算 底部工具栏的数据 全选 总价格 购买的数量
  setCart(cart) {
    let allChecked = cart.length ? true : false;
    // 1 总价格
    let totalPrice = 0;
    // 2 总数量
    let totalNum = 0;
    cart.forEach(v => {
      if (v.checked) {
        totalPrice += v.num * v.goods_price;
        totalNum += v.num;
      } else {
        allChecked = false;
      }
    });

    this.setData({
      cart,
      totalPrice,
      totalNum,
      allChecked
    });

    wx.setStorageSync('cart', cart);
  },
  // 商品全选功能
  handleItemAllCheck() {
    // 1、获取data中的数据
    let { cart, allChecked } = this.data;
    // 2、修改值
    allChecked = !allChecked;
    // 3、循环修改cart苏州 中的商品选中状态
    cart.forEach(v => v.checked = allChecked);
    // 4、把修改后的值 填充回data中或者缓存中
    this.setCart(cart);
  },
  // 商品数量的编辑功能
  async handleItemNumEdit(e) {
    // 1 获取传递过来的参数
    const { operation, id } = e.currentTarget.dataset;
    // 2 获取购物车数组
    let { cart } = this.data;
    // 3 找到需要修改的商品的索引
    const index = cart.findIndex(v => v.goods_id === id);
    // 判断是否要执行删除
    if (cart[index].num === 1 && operation === -1) {
      // 封装的 wx.showModule 方法
      var result = await showModule({content: '确定要删除吗？'});

      if (result.confirm) {
        cart.splice(index, 1);
        this.setCart(cart);
      } else {
        console.log('用户点击取消')
      }
    } else {
      // 4 进行修改数量
      cart[index].num += operation;
      // 5 设置回缓存和data中
      this.setCart(cart);
    }
  },
  // 点击结算
 async handlePay(){
    // 1、判断收货地址
    const {address} = this.data;
    if(Object.keys(address).length === 0){
      await showToast({
        title:'您还没有选中收货地址'
      });
    } else if(this.data.totalNum === 0){
      // 判断用户是否选购商品
      await showToast({
        title:'您还没有选购商品'
      });
    } else{
      wx.navigateTo({
        url: '/pages/pay/index'
      });
    }
  }
})