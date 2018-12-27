import { HTTP } from "../utils/http.js";
import { apis, mock } from '../config/apis';

class ClassicModel extends HTTP {
  getLatest(sCallback) {
    apis.mock ? sCallback(mock.classic.getLatest) : // 启动mock数据
    this.request({
      url: apis.getLatest,
      success: res => {
        sCallback(res);
        this._setLatestIndex(res.index); // 期刊号写入缓存
      }
    });
  }

  getPrevious(index, sCallback) {
    apis.mock ? index >= 2 && sCallback(mock.classic.getPrevious[index-2]) : // 启动mock数据
    this.request({
      url: apis.getPrevious.replace(/<index>/, index),
      success: res =>{
        sCallback(res);
      }
    })
  }

  isFirst(index) { // 判断当前期刊是否是第一期,根据当前期刊号index判断
    return index === 1 ? true : false;
  }

  isLatest(index) { // 判断当前期刊是否是最新一期(最后一期), 根据最新一期期刊数据可获得期刊号index
    let latestIndex = this._getLatestIndex(); // 从缓存中读取最新一期期刊号
    return index === latestIndex ? true : false;
  }

  _setLatestIndex(index) { // 保存当前最新的期刊号index到缓存
    // setStorageSync同步写入缓存(写入数据量小使用), setStroage异步写入缓存
    wx.setStorageSync('latest', index); // 设置缓存
  }

  _getLatestIndex() { // 获取缓存中当前最新的期刊号index
    let index = wx.getStorageSync('latest'); // 同步读取缓存
    return index;
  }
}

export { ClassicModel };
