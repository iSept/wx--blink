import { HTTP } from '../utils/http-p.js';
import { apis, mock } from '../config/apis';


class BookModel extends HTTP {
  getHotList() {
    return this.request({ // 将promise状态返回
      url: apis.getHotList
    })
  }

  getMyBookCount() {
    return this.request({
      url: apis.getMyBookCount
    })
  }
}

export { BookModel };
