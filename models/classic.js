import { HTTP } from "../utils/http.js";
import { apis, mock } from '../config/apis';

class ClassicModel extends HTTP {
  getLatest(sCallback) {
    apis.mock ? sCallback(mock.classic.getLatest) : // 启动mock数据
    this.request({
      url: apis.getLatest,
      success: res => {
        sCallback(res);
      }
    });
  }
}

export { ClassicModel };
