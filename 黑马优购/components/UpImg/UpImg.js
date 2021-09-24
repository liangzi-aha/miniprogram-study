// components/UpImg/UpImg.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src:{
      type: String,
      value:''
    },
    dataIndex:{
      type: Number,
      value: 0
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
    handleRemoveImg(){
      //  触发父组件的事件修改 isAcitve
      this.triggerEvent("handleRemoveImg",{index:this.data.dataIndex})
    }
  }
})
