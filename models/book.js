import {
  HTTP 
} from '../util/http-p.js'

class BookModel extends HTTP {
  getHotList() {
    return this.request({
      url: "/book/hot_list",
    })
  }

  getBookCount() {
    return this.request({
      url: "/book/favor/count"
    })
  }

  getDetail(bid) { //获取书籍的详细信息
    return this.request({
      url: `/book/${bid}/detail`
    })
  }

  getLikeStatus(bid) { //获取当前书籍的点赞状态
    return this.request({
      url: `/book/${bid}/favor`
    })
  }

  getComments(bid) { //获取当前书籍的短评信息
    return this.request({
      url: `/book/${bid}/short_comment`
    })
  }

}


export {
  BookModel
}