import { config } from "../config.js"
// import { config as config1 } from "/config.js" 使用的时候可以用 as 来取导出的名字
const tips = {
  1: '抱歉，出现了一个错误',
  1005: 'appkey无效， 请前往申请',
  3000: "期刊不存在"
}
// 解构
class HTTP {
  request({url, data, method}) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, method)
    })
  }
  _request(url,resolve,reject,data,method) {
    wx.request({
      url: config.api_base_url + url,
      method: method,
      data: data,
      header: {
        "content-type": "application/json",
        "appkey": config.appkey
      },
      success: (res) => {
        let code = res.statusCode.toString()
        if (code.startsWith('2')) {
          // if(params.success)
          resolve(res.data)

        } else {
          reject()
          const error_code = res.data.error_code
          this._show_error(error_code)
        }
      },
      fail: (err) => {
        reject()
        this._show_error(1)
      }
    })
  }
  _show_error(error_code) {
    if (!error_code) {
      error_code = 1
    }
    const tip = tips[error_code]
    wx.showToast({
      title: tip ? top : tips[1],
      icon: 'none',
      duration: 2000
    })
  }
}

export { HTTP }