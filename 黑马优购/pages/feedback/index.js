/**
 * 点击 + 按钮触发tap事件
 *    1 调研小程序内置的 选择图片的api
 *    2 获取到图片的路径 数组
 *    3 把图片路径存到data的变量中
 *    4 页面接课题根据 图片数组 进行循环显示 自定义组件
 * 2、点击自定义组件
 *    1 获取被点击的元素的索引
 *    2 获取data中的图片数组
 *    3 根据索引 数组中删除对应的元素
 *    4把数组重新设置会数组
 * 3、点击提交
 *    1 获取文本域的内容
 *    2 对这些内容合法性验证
 *    3 验证通过 用户选中的图片 上传到专门的图片的服务器 返回图片外网的连接
 *    4 文本域 和 外网的图片的路径 一起提交到服务器  前端模拟不会上传服务器
 *    5 清空当前页面
 *    6 返回上一页
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        value:"体验问题",
        isActive: true
      },
      {
        id:1,
        value:"商品、商家投诉",
        isActive: false
      }
    ],
    // 被选中的图片路径数组
    chooseImgs:[],
    textValue:'',
  },
  // 外网图片的路径数组
  UpLoadImgs:[],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 标题点击事件 从子组件传递过来
  handleTabsItemChange(e){
    // 1、获取被点击的标题索引
    const { index } = e.detail;
    console.log(e);
    // 2、修改源数组
    let { tabs } = this.data;
    tabs.forEach((element,i) => index === i ? element.isActive =  true :  element.isActive =  false);
    // 3、赋值
    this.setData({
      tabs
    })
  },
  // 点击加号选中图片
  handleChooseItem(){
    // 2、调用小程序内种的选中图片api
    wx.chooseImage({
      // 同时选中的图片数量
      count: 9,
      // 图片的歌声 原图 压缩
      sizeType: ['original', 'compressed'],
      // 图片来源 相册 相机
      sourceType: ['album', 'camera'],
      success: (result) => {
        console.log(result);
        this.setData({
          chooseImgs:[...this.data.chooseImgs,...result.tempFilePaths]
        })
      }
    });
      
  },
  // 点击 自定义图片组件
  handleRemoveImg(e){
    console.log(e);
    // 获取data中的图片数组
    let { chooseImgs } = this.data;
    let { index } = e.detail;
    // 删除元素
    chooseImgs.splice(index,1);
    this.setData({
      chooseImgs
    })
    console.log(index);
  },
  // 文本域的输入的事件
  handleTextInput(e){
    this.setData({
      textValue: e.detail.value
    })
  },
  // 提交按钮的点击
  handleFormSubmit(){
    // 1 获取文本域的内容
    const { textValue,chooseImgs } = this.data;
    // 2 合法性验证
    if(!textValue.trim()){
      // 不合法
      wx.showToast({
        title: '输入不合法',
        icon: 'none',
        mask: true,
      });
        
      return;
    }
    // 3 准备上传图片到专门的图片服务器
    // 上传文件的 api不支持 山哥哥文件同时上传 遍历数组 挨个上传
    // 显示正在等待的图片
    wx.showLoading({
      title: '正在上传中',
      mask: true,
    });

    // 判断有没有上传的图片数组
    if(chooseImgs.length != 0){
      chooseImgs.forEach((v,i)=>{
        // UpLoadImgs
        wx.uploadFile({
          // 图片上传到哪里
          url: 'https://imgurl.org/upload/aws_s3',
          // 上传的文件路径
          filePath: v,
          // 上传文件名称 后台来获取文件 file
          name: 'file',
          // wx 上传相当于js let form = new FromData();
          // form.append('image',filePath)
          // 顺带的文本信息
          formData: {},
          success: (result) => {
            let { url } = result;
            this.UpLoadImgs.push(url);
  
            // 所有的图片都上传完毕了触发
            if(i === chooseImgs.length-1){
              wx.hideLoading();
              console.log('把我太难本的内容和外网的图片数组 提交到后台中');
              this.setData({
                textValue:'',
                chooseImgs:[]
              })

              wx.showToast({
                title: '评价成功',
                icon: 'success',
                duration: 1500,
                mask: true,
                success: (result) => {
                  setTimeout(function(){
                    // 跳转上一个页面
                    wx.navigateBack({
                      delta: 1
                    });
                  },1500)
                },
              });
            }
          }
        });
      })  
    } else{
      wx.hideLoading();
      console.log('只提交了文本');
      // 跳转上一个页面
      wx.showToast({
        title: '评价成功',
        icon: 'success',
        duration: 1500,
        mask: true,
        success: (result) => {
          setTimeout(function(){
            // 跳转上一个页面
            wx.navigateBack({
              delta: 1
            });
          },1500)
        },
      });
    }
  }
})