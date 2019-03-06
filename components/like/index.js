// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindGetUserInfo(e) {
      console.log(e.detail.userInfo)
      if (e.detail.userInfo) {
        //用户按了允许授权按钮
        console.log(25)
      } else {
        console.log(27)
        //用户按了拒绝按钮
      }
    }
  }
})
