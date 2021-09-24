// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type: Array,
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
    // 点击事件
    handleItemTap(e){
      // 获取点击的 索引
       const { index } = e.currentTarget.dataset;
      //  触发父组件的事件修改 isAcitve
      this.triggerEvent("tabsItemChange",{index})
    }
  }
})
