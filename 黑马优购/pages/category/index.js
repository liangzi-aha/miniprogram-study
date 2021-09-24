// 引入用来发送请求的方法
import { request } from '../../request/index';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧的菜单数据
    leftMenuList:[],
    // 商品数据
    rightContent:[],
    // 被点击左侧菜单
    currentIndex: 0,
    // 右侧滚动条初始位置
    scrollTop: 0
  },
  // 接口的返回数据
  Cates:[],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
     * 0、web 中的存储和小程序中的存储不一样
     * web中存入什么类型的数据都会toString()再去存
     * 小程序 存入什么类型 取出也是什么类型
     * 1、先判断一下本地存储有没有有的数据
     * {time: Date.now(),dataL[....]}
     * 2、没有旧数据，发送请求获取数据
     * 3、有旧数据 同时 旧数据也没有过期 就是用本地的旧数据即可
     * 
     *  获取本地存储中的数据（小程序也是存在本地存储 技术）
     */
    const Cates = wx.getStorageSync('cates');
    
    if(!Cates){
      // 不存在旧数据
      this.getCates();
    } else{
      console.log('存的有数据')
      // 有旧的数据 定义过期数据
      if(Date.now() - Cates.time > 60000*120){
        // 超过两个小时
        this.getCates();
      }else{
        this.Cates = Cates.data;
        // 构造左侧的大菜单数据
        let leftMenuList = this.Cates.map(v=>v.cat_name);
        // 构造左侧的大菜单数据
        let rightContent = this.Cates[0].children;
        
        this.setData({
          leftMenuList,
          rightContent
        })
      }
    }
  },

  // 获取分类数据
  async getCates(){
    // request({
    //   url: "/categories"
    // }).then(res=>{
    //   this.Cates = res.data.message;
      
    //   // 把接口数据存到本地
    //   wx.setStorageSync('cates',{time: Date.now(),data:this.Cates});

    //   // 构造左侧的大菜单数据
    //   let leftMenuList = this.Cates.map(v=>v.cat_name);
    //   // 构造左侧的大菜单数据
    //   let rightContent = this.Cates[0].children;
      
    //   this.setData({
    //     leftMenuList,
    //     rightContent
    //   })
    // })

    // 使用es7的 async await来发送请求,这里 异步等待（await 同步执行）
    const res = await request({url: "/categories"});

      this.Cates = res;
      // 把接口数据存到本地
      wx.setStorageSync('cates',{time: Date.now(),data:this.Cates});

      // 构造左侧的大菜单数据
      let leftMenuList = this.Cates.map(v=>v.cat_name);
      // 构造左侧的大菜单数据
      let rightContent = this.Cates[0].children;
      
      this.setData({
        leftMenuList,
        rightContent
      })
  },

  // 左侧菜单的点击事件
  handleItemTap(e){
    // 1、获取被点击的标签上的索引
    // 2、给data中的currentIndex 赋值
    // 3、根据不同的索引来渲染右侧商品内容
    const { index } = e.currentTarget.dataset;
    // 构造左侧的大菜单数据
    let rightContent = this.Cates[index].children;
      
    this.setData({
      rightContent,
      currentIndex:index,
      scrollTop: 0
    })
  },
})