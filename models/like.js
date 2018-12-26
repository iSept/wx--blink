import { HTTP } from "../utils/http.js";
import { apis, mock } from '../config/apis';

class LikeModel extends HTTP {
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
}

export { LikeModel };
