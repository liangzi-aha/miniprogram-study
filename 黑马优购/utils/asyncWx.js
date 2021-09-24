// promise 形式的 showModule
/**
 * 
 * @param {*} param0  参数对象
 * @returns 
 */
export const showModule = ({content})=>{
    return new Promise((resolve,reject)=>{
        wx.showModal({
            title: '提示',
            content: content,
            success: (result) => {
                resolve(result)
            },
            fill:(err)=>{
                reject(err);
            }
          });
    })
}

/**
 * promise 形式的 showModule
 * @param {*} param0 参数对象
 * @returns 
 */
export const showToast = ({title})=>{
    return new Promise((resolve,reject)=>{
        wx.showToast({
            title: title,
            icon: "none",
            success: (result) => {
                resolve(result)
            },
            fail: (err) => {
                reject(err)
            },
        });
          
    })
}


/**
 * promise 形式的 getUserProfile 获取用户信息
 * @param {*} param0 参数对象
 * @returns 
 */
export const getUserProfile = ({desc})=>{
    return new Promise((resolve,reject)=>{
        wx.getUserProfile({
            desc: desc, // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                resolve(res);
            },
            fail: (err)=>{
                reject(err)
            }
          })
            
    })
}


/**
 * promise 形式的 getUserProfile 获取小程序登录成功之后的code
 */
 export const login = ()=>{
    return new Promise((resolve,reject)=>{
        wx.login({
            success: (res) => {
                resolve(res);
            },
            fail: (err)=>{
                reject(err)
            }
          })
            
    })
}


/**
 * 微信支付 wx.requestPayment 调起微信的支付功能
 * @pay 支付需要的参数
 */
 export const requestPayment = (pay)=>{
    return new Promise((resolve,reject)=>{
        wx.requestPayment({
            ...pay,
            success: (result) => {
                resolve(result)
            },
            fail: (err) => {
                reject(err)
            }
        });
          
            
    })
}