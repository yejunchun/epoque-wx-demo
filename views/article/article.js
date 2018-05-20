// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    nav: false,
    animationData: {},
    animationOpacity: {},
    animation: {
      nav: {},
      bak: {}
    }
  },
  clickNav: function() {
    let nav = !this.data.nav?true:false

    let animationHeight = this.data.nav == true?-200:0;
    let opacity = this.data.nav == false ? 1 : 0;

    setTimeout(function () {
      this.data.animation.nav.translateY(animationHeight).step()
      this.data.animation.bak.opacity(opacity).step()
      this.setData({
        animationData: this.data.animation.nav.export(),
        animationOpacity: this.data.animation.bak.export(),
      })
    }.bind(this), 0)  

    if (this.data.nav == false){
      this.setData({ nav: true })
    }else{
      setTimeout(function () {
        this.setData({
          nav: false
        })
      }.bind(this), 200)
    }
  },
  createAnimation(){
    let animation = wx.createAnimation({
      duration: 200,
      timingFunction: "ease-out",
      delay: 0
    })
    return animation
  },
  onLoad(){
    this.data.animation.nav = this.createAnimation()
    this.data.animation.bak = this.createAnimation()

    this.data.animation.nav.translateY(-300).step()
    this.data.animation.bak.opacity(0).step()
    this.setData({
      animationData: this.data.animation.nav.export(),
      animationOpacity: this.data.animation.bak.export(),
    })
    
  }
})