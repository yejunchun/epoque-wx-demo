//index.js
//获取应用实例
Page({
  data: {
    name: '店员名称',
    phone: '18320777006',
    shopCode: 'K88sts',
    shopAddress: '广东深圳市罗湖区田心村'
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '当前页面'
    })
  }
})
