// pages/demo09/demo09.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:'首页',
        isActive: true,
        value:'首页'
      },
      {
        id:1,
        name:'原创',
        isActive: false,
        value: '原创'
      },
      {
        id:2,
        name:'分类',
        isActive: false,
        value: '分类'
      },
      {
        id:3,
        name:'关于',
        isActive: false,
        value: '关于'
      },
    ]
  },
  // 子传父
  itemChange(value){
    console.log(value)
    this.setData({
      tabs: value.detail
    })
  },
})