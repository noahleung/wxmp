// pages/vant/vant.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },
  tap() {
   app.globalData.username = '5555'
   console.log(app.globalData.username)
  }

})