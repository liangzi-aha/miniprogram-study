//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 0,    // 默认首页为选中页面
    "backgroundColor": "#ffffff",
    "selectedColor": "#d43a3c",
    items: [
      {
        "pagePath": "/pages/index/index",
        "iconPath": "/assets/images/tabbar/homeTabbar.png",
        "selectedIconPath": "/assets/images/tabbar/homeTabbar1.png",
        "text": "首页"
      },
      {
        "pagePath": "/pages/productList/productList",
        "iconPath": "/assets/images/tabbar/classlistTabbar.png",
        "selectedIconPath": "/assets/images/tabbar/classlistTabbar1.png",
        "text": "分类"
      },
      {
        "pagePath": "/pages/study/study",
        "iconPath": "/assets/images/tabbar/studyTabbar.png",
        "selectedIconPath": "/assets/images/tabbar/studyTabbar1.png",
        "text": "学习"
      },
      {
        "pagePath": "/pages/mine/mine",
        "iconPath": "/assets/images/tabbar/mineTabbar.png",
        "selectedIconPath": "/assets/images/tabbar/mineTabbar1.png",
        "text": "我的"
      }
    ]
  },
  swichNav: function (e) {
    let that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      });
      console.log(e.currentTarget.dataset.url);
      let url = e.currentTarget.dataset.url;  // 点击tabbar时，跳转对应的页面
      wx.switchTab({
        url: url,
      })
    }
  },
})
