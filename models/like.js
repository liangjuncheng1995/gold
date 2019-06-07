import {HTTP} from "../util/http.js"

class LikeModel extends HTTP {
  //artID 喜欢的是哪一种的订阅
  like(behavior, artID, category) {
    let url = behavior == "like" ? "/like" : "/like/cancel"
    this.request({
      url: url,
      method: "POST",
      data: {
        art_id: artID,
        type: category
      }
    })
  }
}

export { LikeModel }

