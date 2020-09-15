Page({
  data: {
    loading: false,
    color: '#000',
    background: '#f8f8f8',
    show: true,
    animated: false,
  },
  toggleLoading() {
    this.setData({
      loading: !this.data.loading
    })
  },
  changeColor() {
    this.setData({
      color: '#07C160'
    })
  },
  changeBgColor() {
    this.setData({
      background: '#ededed'
    })
  },
  toggleShow() {
    this.setData({
      show: !this.data.show
    })
  },
  toggleAnimated() {
    this.setData({
      animated: !this.data.animated,
      show: !this.data.show
    })
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        currentTab: 3  //数字是当前页面在tabbar的索引,如我的查询页索引是2，因此这边为2，同理首页就为0，审批页面为1
      })
    }
  },
  onLoad:function(){
    if(wx.getStorageSync('hsbx_userId')){
      
    }
  },
  login(){
    if(!wx.getStorageSync('hsbx_userId')){
      wx.navigateBack("loginRegister");
    }
  }
})