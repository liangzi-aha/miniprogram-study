// 获取小程序实例
var app = getApp();

Page({
  data: {
    logs: [],
    classList: ['全部', '旅游险', '财产险', '责任险', '车辆险', '理财险', '行业类'],
    productList: [],
    actityTabbar: 0,
    timer: null,
    scrollTopNum:5,
    currentTabbar:'', //当前是那个标签
    currentPage:1, //当前第几页
    isLastPage:false,
    searchValue:'', //搜索内容
  },
  onLoad: function (options) {
    // 获取列表数据
    this.navigation();
  },
  loadMore() { // 触底加载更多
    var that = this;
    if (this.data.isLastPage == false){
      // 加载动画
      wx.showLoading({
        title: '加载中',
        mask: true,
      });

      wx.request({
        method: 'post',
        url: 'https://www.zgbxjj.com/openapi/h5/product/getProdGoodsList',
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        data: {
          params: '{ classTag: "' + that.data.currentTabbar + '", currentPage: ' + that.data.currentPage + ', goodName: "' + that.data.searchValue +'" }'
        },
        success: function (res) {
          if (res.data.code == 20000) {
            var list = that.data.productList.concat(res.data.data.list);
            that.setData({
              "productList": list,
              "currentPage": ++that.data.currentPage,
              "isLastPage": res.data.data.isLastPage
            });
            // 关闭加载动画
            wx.hideLoading();
          } else {
            wx.showToast({
              title: res.data.message,
              icon: 'none',
              duration: 2000
            })
          }
        },
        fail: function () {
          // 关闭加载动画
          wx.hideLoading();
          wx.showToast({
            title: "接口请求失败",
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
  },
  // 切换导航栏
  navigation: function (e) {
    var that = this;
    var tabbar = '';
    // 加载动画
    wx.showLoading({
      title: '加载中',
      mask: true,
    });
    if (e) {
      tabbar = e.detail.title == '全部' ? '' : e.detail.title;

      this.setData({
        "actityTabbar": e.currentTarget.dataset['current'],
        "currentTabbar": tabbar,
        "productList": [],
        "isLastPage": false,
        "currentPage": 1,
        "searchValue":'',
      });
    } 

    wx.request({
      method: 'post',
      url: 'https://www.zgbxjj.com/openapi/h5/product/getProdGoodsList',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data: {
        params: '{ classTag: "' + this.data.currentTabbar + '", currentPage: ' + that.data.currentPage +', goodName: "" }'
      },
      success: function (res) {
        if (res.data.code == 20000) {
          var list = that.data.productList.concat(res.data.data.list);
          that.setData({
            "productList": list,
            "currentPage": ++that.data.currentPage,
            "isLastPage": res.data.data.isLastPage,
          });
          // 关闭加载动画
          wx.hideLoading();
        }else{
          wx.showToast({
            title: res.data.message,
            icon:'none',
            duration: 2000
          })
        }
      },
      fail:function(){
        // 关闭加载动画
        wx.hideLoading();
        wx.showToast({
          title: "接口请求失败",
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        currentTab: 1  //数字是当前页面在tabbar的索引,如我的查询页索引是2，因此这边为2，同理首页就为0，审批页面为1
      })
    }
    
    // 判断是否固定切换tabbar
    if (app.globalData.activityTabbar){
      // 修改actityTabbar
      this.setData({
        "actityTabbar": app.globalData.activityTabbar ? app.globalData.activityTabbar : '',
        "currentTabbar": app.globalData.activityTabName ? app.globalData.activityTabName : '',
        "productList": [],
        "isLastPage": false,
        "currentPage": 1,
      });

      // 调用tabs子组件的属性
      this.selectComponent("#tabs").setData({
        currentIndex: app.globalData.activityTabbar,
      });
      // 调用tabs子组件的方法
      this.selectComponent("#tabs").setLine(true);
      this.selectComponent("#tabs").scrollIntoView();

      // 获取列表数据
      this.navigation();
    }
  },
  // 搜索内容修改
  onChange(e) {
    this.setData({
      searchValue: e.detail,
    });
  },
  // 搜索
  search: function(){
    var that = this;
    // 调用tabs子组件的属性
    this.selectComponent("#tabs").setData({
      currentIndex: 0
    });
    // 调用tabs子组件的方法
    this.selectComponent("#tabs").setLine(true);
    this.selectComponent("#tabs").scrollIntoView();
    // 加载动画
    wx.showLoading({
      title: '加载中',
      mask: true,
    });
    this.setData({
      "actityTabbar": 0,
      "currentTabbar": '',
      "productList": [],
      "isLastPage": false,
      "currentPage": 1,
    });
    
    wx.request({
      method: 'post',
      url: 'https://www.zgbxjj.com/openapi/h5/product/getProdGoodsList',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data: {
        params: '{ classTag: "' + that.data.currentTabbar + '", currentPage: ' + that.data.currentPage + ', goodName: "' + that.data.searchValue +'" }'
      },
      success: function (res) {
        if (res.data.code == 20000) {
          var list = that.data.productList.concat(res.data.data.list);
          that.setData({
            "productList": list,
            "currentPage": ++that.data.currentPage
          });
          // 关闭加载动画
          wx.hideLoading();
        } else {
          wx.showToast({
            title: res.data.message,
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: function () {
        // 关闭加载动画
        wx.hideLoading();
        wx.showToast({
          title: "接口请求失败",
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
})
