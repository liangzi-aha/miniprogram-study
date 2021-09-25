

Page({
  data: {
    logs: [],
    classList: [
      { name: '保险理念', code: '07' },
      { name: '产品介绍', code: '09' },
      { name: '政策法规', code: '10' }
    ],
    articleLIst: [],
    actityTabbar: 0,
    timer: null,
    scrollTopNum: 5,
    currentTabbar: '07', //当前是那个标签code
    currentPage: 1, //当前第几页
    isLastPage: false,
    searchValue: '', //搜索内容
    active:0, //默认选中tab
  },
  onLoad: function () {
    this.navigation();
  },
  loadMore() { // 触底加载更多
    var that = this;
    if (this.data.isLastPage == false) {
      wx.request({
        method: 'post',
        url: 'https://www.zgbxjj.com/openapi/classroom/study',
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        data: {
          cateType: that.data.currentTabbar,
          page: that.data.currentPage,
          limit: "08"
        },
        success: function (res) {
          var list = that.data.articleLIst.concat(res.data.list);
          that.setData({
            "articleLIst": list,
            "currentPage": ++that.data.currentPage,
            "isLastPage": (list.length == res.data.totalCount ? true : false)
          })
        }
      })
    }
  },
  // 切换导航栏
  navigation: function (e) {
    var that = this;
    if (e) {
      console.log(e.detail.title);
      var tabbarId;
      this.data.classList.forEach(ele => {
        // console.log(e.detail.title, ele.name)
        if (ele.name == e.detail.title) {
          tabbarId = ele.code;
          console.log(tabbarId)
        }
      });
      this.setData({
        "actityTabbar": e.detail.title,
        "currentTabbar": tabbarId,
        "articleLIst": [],
        "isLastPage": false,
        "currentPage": 1,
        "searchValue": '',
      });
    };

    wx.request({
      method: 'post',
      url: 'https://www.zgbxjj.com/openapi/classroom/study',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data: {
        cateType: that.data.currentTabbar,
        page: that.data.currentPage,
        limit: "08"
      },
      success: function (res) {
        var list = that.data.articleLIst.concat(res.data.list);
        console.log(list);
        that.setData({
          "articleLIst": list,
          "currentPage": ++that.data.currentPage,
          "isLastPage": (list.length == res.data.totalCount ? true : false),
        })
      }
    })
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        currentTab: 2  //数字是当前页面在tabbar的索引,如我的查询页索引是2，因此这边为2，同理首页就为0，审批页面为1
      })
    }
  },
  // 搜索
  search: function () {
    var that = this;

    this.setData({
      "actityTabbar": 0,
      "currentTabbar": '',
      "articleLIst": [],
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
        params: '{ classTag: "' + that.data.currentTabbar + '", currentPage: ' + that.data.currentPage + ', goodName: "' + that.data.searchValue + '" }'
      },
      success: function (res) {
        var list = that.data.articleLIst.concat(res.data.data.list);
        that.setData({
          "articleLIst": list,
          "currentPage": ++that.data.currentPage
        })
      }
    })
  },
  // 获取输入内容
  input: function (e) {
    this.setData({
      searchValue: e.detail.value
    })
  }
})
