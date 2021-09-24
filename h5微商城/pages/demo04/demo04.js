// pages/demo04/demo04.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0
  },
  // 输入框input事件的执行逻辑
  handleInput(e){
    console.log(e.detail.vaue);
    this.setData({
      num:e.detail.value
    })
  },
  // 加减事件
  handleTap(e){
    // 获取自定义属性 calculate
    console.log(e.target.dataset.calculate);
    var calculate = e.target.dataset.calculate
    this.setData({
      num: Number(this.data.num) + calculate
    })
  }
})