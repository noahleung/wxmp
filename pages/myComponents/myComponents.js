// pages/myComponents/myComponents.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        name: '首页',
        isActive: true
      },
      {
        id: 1,
        name: '原创',
        isActive: false
      },
      {
        id: 2,
        name: '分类',
        isActive: false
      },
      {
        id: 3,
        name: '关于',
        isActive: false
      }
    ]
  },
  changeItem(e) {
    let index = e.detail
    let list = this.data.tabs
    list.forEach((item, index2) => index2 === index ? item.isActive = true : item.isActive = false);
    this.setData({
      tabs: list
    })
  }
})