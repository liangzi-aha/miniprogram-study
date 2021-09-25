// pages/demo08/demo08.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    html: '<div data-spm="home_m_h_v5_market_4_new_1" data-tpl-id="home_m_h_v5_market_4_new_1" class="tpl-wrapper" style="margin-top: 10px;"><div view-name="FrameLayout" style="position: relative; display: flex; overflow: hidden; box-sizing: border-box; margin: 0px; height: 363px; padding-left: 0px; padding-right: 0px; width: 375px;"><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 0px 0px 15px; height: 128px; width: 375px; left: 0px; bottom: 0px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain;"></div></div><div view-name="FrameLayout" style="position: absolute; display: flex; overflow: hidden; box-sizing: border-box; margin: 0px 9px; padding-left: 0px; padding-right: 0px; width: 357px; height: 363px; border-top-left-radius: 12px; border-top-right-radius: 12px; background-color: rgb(255, 255, 255); left: 0px; top: 0px;"><div view-name="ImageView" style="position: relative; display: flex; align-self: flex-start; overflow: hidden; margin: 9px 0px 0px; height: 20px; width: 175px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover; background-image: url(&quot;https://gw.alicdn.com/tfs/TB11.K2mq61gK0jSZFlXXXDKFXa-525-60.png?getAvatar=1_360x360q90_.webp&quot;);"><img src="https://gw.alicdn.com/tfs/TB11.K2mq61gK0jSZFlXXXDKFXa-525-60.png?getAvatar=1_360x360q90_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><!-- empty --><div view-name="FrameLayout" aria-label="聚划算1" style="position: absolute; display: flex; overflow: hidden; box-sizing: border-box; margin: 32px 0px 0px 12px; height: 88px; padding-left: 0px; padding-right: 0px; width: 72px; background-color: rgb(253, 245, 242); border-radius: 6px; left: 0px; top: 0px;"></div><div view-name="TextView" style="position: absolute; display: flex; margin: 36px 0px 0px 18px; height: 16px; width: 64px; visibility: visible; color: rgb(254, 78, 80); font-size: 13px; font-weight: bold; justify-content: flex-start; -webkit-box-pack: start; align-items: center; -webkit-box-align: center; overflow: hidden; max-width: none;"><span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 16px;">品牌折扣</span></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 55px 0px 0px 17px; height: 62px; width: 62px; background-color: rgb(255, 255, 255);"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;//img.alicdn.com/tps/O1CN01frxQjn1Vf1lDeoRZT_!!6000000002679-0-yinhe.jpg_125x125q90_.webp&quot;);"><img src="//img.alicdn.com/tps/O1CN01frxQjn1Vf1lDeoRZT_!!6000000002679-0-yinhe.jpg_125x125q90_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="View" style="position: absolute; display: flex; margin: 55px 0px 0px 17px; height: 62px; width: 62px; background-color: rgba(214, 67, 0, 0.05); left: 0px; top: 0px;"></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 55px 0px 0px 18px; height: 16px; width: 25px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain;"></div></div><div view-name="FrameLayout" aria-label="聚划算2" style="position: absolute; display: flex; overflow: hidden; box-sizing: border-box; margin: 32px 0px 0px 93px; height: 88px; padding-left: 0px; padding-right: 0px; width: 72px; background-color: rgb(252, 249, 243); border-radius: 6px; left: 0px; top: 0px;"></div><div view-name="TextView" style="position: absolute; display: flex; margin: 36px 0px 0px 99px; height: 16px; width: 64px; visibility: visible; color: rgb(255, 117, 24); font-size: 13px; font-weight: bold; justify-content: flex-start; -webkit-box-pack: start; align-items: center; -webkit-box-align: center; overflow: hidden; max-width: none;"><span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 16px;">划算好货</span></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 55px 0px 0px 98px; height: 62px; width: 62px; background-color: rgb(255, 255, 255);"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;//img.alicdn.com/tps/O1CN01YvQWJ81pNtG3PrMZs_!!6000000005349-0-yinhe.jpg_125x125q90_.webp&quot;);"><img src="//img.alicdn.com/tps/O1CN01YvQWJ81pNtG3PrMZs_!!6000000005349-0-yinhe.jpg_125x125q90_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="View" style="position: absolute; display: flex; margin: 55px 0px 0px 98px; height: 62px; width: 62px; background-color: rgba(195, 144, 27, 0.05); left: 0px; top: 0px;"></div><div view-name="FrameLayout" style="position: absolute; display: none; overflow: hidden; box-sizing: border-box; margin: 107px 0px 0px 93px; height: 13px; padding-left: 0px; padding-right: 0px; width: 72px; left: 0px; top: 0px;"><!-- empty --></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 9px 0px 0px 179px; height: 20px; width: 175px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover; background-image: url(&quot;https://gw.alicdn.com/tfs/TB1MfTtQrrpK1RjSZTEXXcWAVXa-525-60.png?getAvatar=1_360x360q90_.webp&quot;);"><img src="https://gw.alicdn.com/tfs/TB1MfTtQrrpK1RjSZTEXXcWAVXa-525-60.png?getAvatar=1_360x360q90_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="LinearLayout" style="position: absolute; display: flex; overflow: hidden; box-sizing: border-box; margin: 31px 0px 0px 191px; height: 17px; padding-left: 0px; padding-right: 0px; width: fit-content; flex-direction: row; -webkit-box-orient: horizontal; -webkit-box-direction: normal;"><div view-name="TextView" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; margin: 0px; height: 100%; width: fit-content; visibility: visible; color: rgb(255, 80, 125); font-size: 13px; place-self: center flex-start; max-width: 82px; justify-content: flex-start; -webkit-box-pack: start; align-items: center; -webkit-box-align: center; overflow: hidden;"><span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 16px;">好物传送门</span></div></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 55px 0px 0px 191px; height: 62px; width: 62px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;https://img.alicdn.com/i4/187620209531124960/TB2rRWooXXXXXXpXpXXXXXXXXXX_!!0-juitemmedia.jpg_125x125q90_.webp&quot;);"><img src="https://img.alicdn.com/i4/187620209531124960/TB2rRWooXXXXXXpXpXXXXXXXXXX_!!0-juitemmedia.jpg_125x125q90_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 46px 0px 0px 191px; height: 23px; width: 25px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain;"></div></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 35px 0px 0px 277px; height: 82px; width: 68px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;https://gw.alicdn.com/imgextra/i3/198/TB2adoFw9tYBeNjSspaXXaOOFXa_!!198-0-luban.jpg_180x180q90_.webp&quot;);"><img src="https://gw.alicdn.com/imgextra/i3/198/TB2adoFw9tYBeNjSspaXXaOOFXa_!!198-0-luban.jpg_180x180q90_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 129px 0px 0px; height: 20px; width: 85px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover; background-image: url(&quot;https://gw.alicdn.com/tfs/TB1r3C2mrj1gK0jSZFOXXc7GpXa-255-60.png?getAvatar=1_180x180q90_.webp&quot;);"><img src="https://gw.alicdn.com/tfs/TB1r3C2mrj1gK0jSZFOXXc7GpXa-255-60.png?getAvatar=1_180x180q90_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="FrameLayout" aria-label="淘抢购1" style="position: absolute; display: flex; overflow: hidden; box-sizing: border-box; margin: 152px 0px 0px 12px; height: 88px; padding-left: 0px; padding-right: 0px; width: 72px; background-color: rgb(255, 248, 250); border-radius: 6px; left: 0px; top: 0px;"></div><div view-name="TextView" style="position: absolute; display: flex; margin: 156px 0px 0px 18px; height: 16px; width: 64px; visibility: visible; color: rgb(250, 42, 89); font-size: 13px; font-weight: bold; justify-content: flex-start; -webkit-box-pack: start; align-items: center; -webkit-box-align: center; overflow: hidden; max-width: none;"><span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 16px;">限时半价</span></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 175px 0px 0px 17px; height: 62px; width: 62px; background-color: rgb(255, 255, 255);"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;https://gw.alicdn.com/imgextra/i2/2/TB2m7tdwf5TBuNjSspmXXaDRVXa_!!2-2-luban.png_125x125q90_.webp&quot;);"><img src="https://gw.alicdn.com/imgextra/i2/2/TB2m7tdwf5TBuNjSspmXXaDRVXa_!!2-2-luban.png_125x125q90_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="View" style="position: absolute; display: flex; margin: 175px 0px 0px 17px; height: 62px; width: 62px; background-color: rgba(255, 111, 151, 0.05); left: 0px; top: 0px;"></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 129px 0px 0px 92px; height: 20px; width: 85px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover; background-image: url(&quot;https://gw.alicdn.com/tfs/TB1G59WmEY1gK0jSZFMXXaWcVXa-255-60.png?getAvatar=1_180x180q90_.webp&quot;);"><img src="https://gw.alicdn.com/tfs/TB1G59WmEY1gK0jSZFMXXaWcVXa-255-60.png?getAvatar=1_180x180q90_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="FrameLayout" aria-label="天天特卖1" style="position: absolute; display: flex; overflow: hidden; box-sizing: border-box; margin: 152px 0px 0px 93px; height: 88px; padding-left: 0px; padding-right: 0px; width: 72px; background-color: rgb(255, 248, 243); border-radius: 6px; left: 0px; top: 0px;"></div><div view-name="TextView" style="position: absolute; display: flex; margin: 156px 0px 0px 99px; height: 16px; width: 64px; visibility: visible; color: rgb(255, 76, 9); font-size: 13px; font-weight: bold; justify-content: flex-start; -webkit-box-pack: start; align-items: center; -webkit-box-align: center; overflow: hidden; max-width: none;"><span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 16px;">9.9包邮</span></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 175px 0px 0px 98px; height: 62px; width: 62px; background-color: rgb(255, 255, 255);"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;//img.alicdn.com/tps/O1CN01Zetfgb1YHcMzZ11p0_!!6000000003034-0-yinhe.jpg_125x125q90_.webp&quot;);"><img src="//img.alicdn.com/tps/O1CN01Zetfgb1YHcMzZ11p0_!!6000000003034-0-yinhe.jpg_125x125q90_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="View" style="position: absolute; display: flex; margin: 175px 0px 0px 98px; height: 62px; width: 62px; background-color: rgba(255, 126, 23, 0.05); left: 0px; top: 0px;"></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 175px 0px 0px 99px; height: 16px; width: 25px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain;"></div></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 129px 0px 0px 179px; height: 20px; width: 175px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover; background-image: url(&quot;https://gw.alicdn.com/tfs/TB1Cbq1mrj1gK0jSZFuXXcrHpXa-525-60.png?getAvatar=1_360x360q90_.webp&quot;);"><img src="https://gw.alicdn.com/tfs/TB1Cbq1mrj1gK0jSZFuXXcrHpXa-525-60.png?getAvatar=1_360x360q90_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="LinearLayout" style="position: absolute; display: flex; overflow: hidden; box-sizing: border-box; margin: 150px 0px 0px 191px; height: 17px; padding-left: 0px; padding-right: 0px; width: fit-content; flex-direction: row; -webkit-box-orient: horizontal; -webkit-box-direction: normal;"><div view-name="TextView" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; margin: 0px; height: 100%; width: fit-content; visibility: visible; color: rgb(80, 189, 255); font-size: 13px; place-self: center flex-start; max-width: 82px; justify-content: flex-start; -webkit-box-pack: start; align-items: center; -webkit-box-align: center; overflow: hidden;"><span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 16px;">全民口碑推荐</span></div></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 175px 0px 0px 191px; height: 62px; width: 62px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;//gw.alicdn.com/imgextra/i2/105/O1CN01guyuK01Ce89igmapj_!!105-2-lubanu.png_125x125q90_.webp&quot;);"><img src="//gw.alicdn.com/imgextra/i2/105/O1CN01guyuK01Ce89igmapj_!!105-2-lubanu.png_125x125q90_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 171px 0px 0px 191px; height: 16px; width: 25px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain;"></div></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 155px 0px 0px 277px; height: 82px; width: 68px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;//gw.alicdn.com/imgextra/i4/183/O1CN01wtUXE51DDr3hIeXOr_!!183-0-lubanu.jpg_180x180q90_.webp&quot;);"><img src="//gw.alicdn.com/imgextra/i4/183/O1CN01wtUXE51DDr3hIeXOr_!!183-0-lubanu.jpg_180x180q90_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 249px 0px 0px; height: 20px; width: 175px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover; background-image: url(&quot;https://gw.alicdn.com/tfs/TB1lfyQmpY7gK0jSZKzXXaikpXa-525-60.png?getAvatar=1_360x360q90_.webp&quot;);"><img src="https://gw.alicdn.com/tfs/TB1lfyQmpY7gK0jSZKzXXaikpXa-525-60.png?getAvatar=1_360x360q90_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="LinearLayout" style="position: absolute; display: flex; overflow: hidden; box-sizing: border-box; margin: 270px 0px 0px 12px; height: 17px; padding-left: 0px; padding-right: 0px; width: fit-content; flex-direction: row; -webkit-box-orient: horizontal; -webkit-box-direction: normal;"><div view-name="TextView" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; margin: 0px; height: 100%; width: fit-content; visibility: visible; color: rgb(249, 165, 0); font-size: 13px; place-self: center flex-start; max-width: 82px; justify-content: flex-start; -webkit-box-pack: start; align-items: center; -webkit-box-align: center; overflow: hidden;"><span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 16px;">挖深藏的店</span></div></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 294px 0px 0px 14px; height: 62px; width: 62px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;//gw.alicdn.com/imgextra/i1/147/O1CN01ckpGLr1CxMmf84yHw_!!147-2-lubanu.png_125x125q90_.webp&quot;);"><img src="//gw.alicdn.com/imgextra/i1/147/O1CN01ckpGLr1CxMmf84yHw_!!147-2-lubanu.png_125x125q90_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 286px 0px 0px 14px; height: 25px; width: 23px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain;"></div></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 274px 0px 0px 98px; height: 82px; width: 68px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;//gw.alicdn.com/imgextra/i4/67/O1CN01xCE9Lr1CMj7oDFS6r_!!67-0-lubanu.jpg_180x180q90_.webp&quot;);"><img src="//gw.alicdn.com/imgextra/i4/67/O1CN01xCE9Lr1CMj7oDFS6r_!!67-0-lubanu.jpg_180x180q90_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 249px 0px 0px 179px; height: 20px; width: 175px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover; background-image: url(&quot;https://gw.alicdn.com/tfs/TB1jkazoAL0gK0jSZFAXXcA9pXa-525-60.png?getAvatar=1_360x360q90_.webp&quot;);"><img src="https://gw.alicdn.com/tfs/TB1jkazoAL0gK0jSZFAXXcA9pXa-525-60.png?getAvatar=1_360x360q90_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="LinearLayout" style="position: absolute; display: flex; overflow: hidden; box-sizing: border-box; margin: 270px 0px 0px 191px; height: 17px; padding-left: 0px; padding-right: 0px; width: fit-content; flex-direction: row; -webkit-box-orient: horizontal; -webkit-box-direction: normal;"><div view-name="TextView" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; margin: 0px; height: 100%; width: fit-content; visibility: visible; color: rgb(255, 97, 29); font-size: 13px; place-self: center flex-start; max-width: 82px; justify-content: flex-start; -webkit-box-pack: start; align-items: center; -webkit-box-align: center; overflow: hidden;"><span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 16px;">粉丝都爱看</span></div></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 294px 0px 0px 191px; height: 62px; width: 62px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;//gw.alicdn.com/imgextra/i4/148/O1CN01KtdgXI1CxpAgzfAJm_!!148-2-lubanu.png_125x125q90_.webp&quot;);"><img src="//gw.alicdn.com/imgextra/i4/148/O1CN01KtdgXI1CxpAgzfAJm_!!148-2-lubanu.png_125x125q90_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 286px 0px 0px 191px; height: 25px; width: 23px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain;"></div></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin: 274px 0px 0px 277px; height: 82px; width: 68px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;//gw.alicdn.com/imgextra/i3/19/O1CN01rdWNNa1C0k5wVSeU1_!!19-0-lubanu.jpg_180x180q90_.webp&quot;);"><img src="//gw.alicdn.com/imgextra/i3/19/O1CN01rdWNNa1C0k5wVSeU1_!!19-0-lubanu.jpg_180x180q90_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="View" style="position: absolute; display: flex; margin: 0px; height: 100%; width: 0.5px; left: 178.25px; top: 0px; background-color: rgb(238, 238, 238);"></div><div view-name="View" class="dx-event-node" aria-label="聚划算1" style="position: absolute; display: flex; margin: 0px; height: 121px; width: 90px; left: 0px; top: 0px;"></div><div view-name="View" class="dx-event-node" aria-label="聚划算2" style="position: absolute; display: flex; margin: 0px 0px 0px 90px; height: 121px; width: 88px; left: 0px; top: 0px;"></div><div view-name="View" class="dx-event-node" aria-label="直播1" style="position: absolute; display: flex; margin: 0px 0px 0px 178px; height: 121px; width: 91px; left: 0px; top: 0px;"></div><div view-name="View" class="dx-event-node" aria-label="直播2" style="position: absolute; display: flex; margin: 0px 0px 0px 269px; height: 121px; width: 87px; left: 0px; top: 0px;"></div><div view-name="View" class="dx-event-node" aria-label="淘抢购1" style="position: absolute; display: flex; margin: 121px 0px 0px; height: 121px; width: 90px; left: 0px; top: 0px;"></div><div view-name="View" class="dx-event-node" aria-label="天天特卖1" style="position: absolute; display: flex; margin: 121px 0px 0px 90px; height: 121px; width: 88px; left: 0px; top: 0px;"></div><div view-name="View" class="dx-event-node" aria-label="有好货1" style="position: absolute; display: flex; margin: 121px 0px 0px 178px; height: 121px; width: 91px; left: 0px; top: 0px;"></div><div view-name="View" class="dx-event-node" aria-label="有好货2" style="position: absolute; display: flex; margin: 121px 0px 0px 269px; height: 121px; width: 87px; left: 0px; top: 0px;"></div><div view-name="View" class="dx-event-node" aria-label="造物神店1" style="position: absolute; display: flex; margin: 242px 0px 0px; height: 121px; width: 90px; left: 0px; top: 0px;"></div><div view-name="View" class="dx-event-node" aria-label="造物神店2" style="position: absolute; display: flex; margin: 242px 0px 0px 90px; height: 121px; width: 88px; left: 0px; top: 0px;"></div><div view-name="View" class="dx-event-node" aria-label="爱逛街1" style="position: absolute; display: flex; margin: 242px 0px 0px 178px; height: 121px; width: 91px; left: 0px; top: 0px;"></div><div view-name="View" class="dx-event-node" aria-label="爱逛街2" style="position: absolute; display: flex; margin: 242px 0px 0px 269px; height: 121px; width: 87px; left: 0px; top: 0px;"></div></div></div></div>',
    html1:[
      {
        // div 标签 name属性来指定
        name:'div',
        // 标签上有哪些属性
        attrs:{
          // 标签上的属性 class style
          class:"my_div",
          style: "color:red"
        },
        // 子节点 children 要接收的数据类型和 nodes 第二种渲染方式的数据类型一致
        children:[
          {
            name:'p',
            attr:{},
            children:[
              {
                type:"text",
                text:"我是帅哥"
              }
            ]
          }
        ]
      }
    ],
    gender:"male",
    list: [
      {
        id:0,
        name: "苹果",
        value: 'aphone'
      },
      {
        id:1,
        name: "橘子",
        value: 'juzi'
      },
      {
        id:2,
        name: "香蕉",
        value: 'banana'
      },
    ],
    checkBoxValue:[],
  },
  // 获取用户手机信息
  getUserNumber(el){
      console.log(el);
  },
  // 获取用户信息
  getUserInfo(el){
    console.log(el);
  },
  // 单选框选中回调
  handleChange(e){
    console.log(e);
    this.setData({
      gender: e.detail.value
    })
  },
  // 多选框选中回调
  handleCheckBox(e){
    console.log(e);
    this.setData({
      checkBoxValue: e.detail.value
    })
  }
})