// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表 父组件传过来的属性
   */
  properties: {
    // 要接收的数据名称
    tabs:{
      // 传过来的数据类型
      type: Array,
      // 传过来属性的默认值为空
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 自定义组件的方法写在methods里面，而普通组件的方法不用
    // 子传父 this.triggerEvent("父组件自定义事件名称","传值")
    changeTab(e){
      const { id } = e.target.dataset;
      
      var { tabs } = this.data

      tabs.forEach((element,index) => element.id === id ? element.isActive = true : element.isActive = false);

      // this.setData({
      //   tabs: tabs
      // })

      // 子传父
      this.triggerEvent('itemChange',tabs)
    }
  }
})
