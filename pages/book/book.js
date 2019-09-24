// pages/book/book.js
import { BookModel } from "../../models/book.js"
let bookModel = new BookModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //纯粹callback 会陷入回调的地狱 剥夺return
    //promise 解决回调地狱，，代码风格 多个异步等待合并
    // async await ES2017
    // 一次调用，多次调用服务器API 链式调用

    books: []

  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const hotList = bookModel.getHotList()
    hotList.then(res => {
      // console.log(res)
      this.setData({
        books: res
      })
    })



    // const hotList = bookModel.getHotList()
    // hotList.then(res => {
    //   console.log(res)
    //   return bookModel.getBookCount()
    // }).then(res => {
    //   console.log(res)
    // })

    //Promise 对象 函数
    //对象可以保存状态，函数不行
    //闭包函数可以保存状态

    // Promise第一步
    // 异步代码 写在Promise的函数中，第二步
    // const promise = new Promise((resolve, reject) => {
    //   //Promise的三种状态
    //   //pending(进行中) fulfilled(已成功) reject(已失败)
      
    //   wx.getSystemInfo({
    //     success: function(res) {
    //       resolve(res)
    //     },
    //     fail: function(res) {
    //       console.log(res) 
    //       reject(res)
    //     }
    //   })
    // })
    // promise.then((res) => {
    //   console.log(res)
    // },(error) => {
    //   console.log(error)
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})