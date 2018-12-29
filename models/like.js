import { HTTP } from "../utils/http.js";
import { apis, mock } from '../config/apis';

class LikeModel extends HTTP {
  /* 点赞和取消点赞 */
  like(behavior, artID, category) {
    let url = behavior === 'like' ? apis.like : apis.likeCancel;
    apis.mock ? '' :
    this.request({
      url: url,
      method: 'POST',
      data: {
        art_id: artID,
        type: category
      }
    });
  }

  /* 获取点赞信息 */
  getClassicLikeStatus(artID, category, sCallback) {
    apis.mock ? '' :
    this.request({
      url: apis.likeStatus.replace(/<type>\/<id>/, `${category}/${artID}`),
      success: res =>{
        sCallback(res);
      }
    })
  }
}

export { LikeModel };
