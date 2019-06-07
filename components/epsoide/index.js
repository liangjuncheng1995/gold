// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      observer: function(newVal, oldVal, changePath) {
        console.log(newVal)
        console.log(oldVal)
        console.log(changePath)
        let val = newVal < 10 ? '0' + newVal : newVal
        this.setData({
          _index: val
        }) 
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: 0,
    month: "",
    _index: ""
  },

  attached() {
    // console.log(typeof Number)
    // console.log(Number)
    // console.log(this.properties)
    // console.log(this.data)
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
