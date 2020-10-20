//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: [1,2,3,4,5,11,22]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getLocation: function(e) {
    console.log(e)
    this.setData({
    })
    console.log(app.globalData.username)
    wx.getLocation({
      type: 'wgs84',
      success(e){
        console.log('e---',e)
      }
    })
  }
})
