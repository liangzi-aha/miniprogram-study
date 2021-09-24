/**
 * 1、输入框绑定 值改变事件 input 事件
 *    1 获取到输入框的值
 *    2 合法性判断
 *    3 检验通过 把输入框的值 发送到后台
 *    4 返回的值渲染出来
 * 2、防抖 防止抖动 定时器 防止重复发送请求
 *    1 定义全局的定时器 id
 */
 import { request } from '../../request/index.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[],
    // 取消按钮是否显示
    isFocus: false,
    inputValue: '',
  },
  TimeId: -1,
  // 输入框的值改变时触发
  handleInput(e){
    // 1 获取输入框的值
    const { value } = e.detail;
    // 检查合法性
    if(!value.trim()){
      this.setData({
        goods:[],
        isFocus: false
      })
      // 不合法
      return;
    }
    this.setData({
      isFocus: true
    })
    // 3 发送请求获取数据
    clearTimeout(this.TimeId);
    this.TimeId = setTimeout(()=>{
      this.qSearch(value);
    },1000)
  },
  // 发送请求获取搜索建议 数据
  async qSearch(query){
    const res = await request({
      url:'/goods/qsearch',
      data:{
        query
      }
    });
    this.setData({
      goods: res
    })
    console.log(res)
  },
  // 点击取消按钮
  handleCancel(){
    this.setData({
      inputValue:'',
      goods:[],
      isFocus: false
    })
  }
})