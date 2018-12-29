import { HTTP } from "../utils/http.js";
import { apis, mock } from '../config/apis';

class ClassicModel extends HTTP {
  classicKey = 'classicMap';
  classicMap = {};
  getLatest(sCallback) {
    apis.mock ? sCallback(mock.classic.getLatest) : // 启动mock数据
    this.request({
      url: apis.getLatest,
      success: res => {
        sCallback(res);
        this._setLatestIndex(res.index); // 期刊号写入缓存
        // wx.setStorageSync(this._getKey(res.index), res); // 单条写入缓存
        this.classicMap[this._getKey(res.index)] = res;
        wx.setStorageSync(this.classicKey, this.classicMap); // 将当期期刊写入缓存(对象形式多条写入)
      }
    });
  }

  // getPrevious(index, sCallback) { // 获取前一期期刊
  //   apis.mock ? index >= 2 && sCallback(mock.classic.getPrevious[index-2]) : // 启动mock数据
  //   this.request({
  //     url: apis.getPrevious.replace(/<index>/, index),
  //     success: res =>{
  //       sCallback(res);
  //     }
  //   })
  // }

  /* 获取下一期或者上一期期刊 */
  getClassic(index, nextOrPrevious, sCallback) {
    // 数据来源： 缓存 or API写入到缓存
    // 缓存key， 确定key => 定义一个私有方法_getKey
    let apiurl = null;
    let currKey = null;
    if (nextOrPrevious === 'previous') { // 获取前一期期刊
      apiurl = apis.getPrevious;
      currKey = this._getKey(index - 1);
    } else { // 获取后一期期刊
      apiurl = apis.getNext;
      currKey = this._getKey(index + 1);
    }
    // let classic = wx.getStorageSync(currKey); // 单条读取缓存
    let classic = wx.getStorageSync(this.classicKey)[currKey]; // 对象形式多条对应读取缓存
    if (apis.mock) { // 启动mock数据
      nextOrPrevious === 'previous' ?
      index >= 2 && sCallback(mock.classic.getClassics[index-2]) :
      index < 8 && sCallback(mock.classic.getClassics[index]);
    } else {
      if (!classic) { // 无缓存，写入请求数据到缓存
        this.request({
          url: apiurl.replace(/<index>/, index),
          success: res =>{
            sCallback(res);
            // wx.setStorageSync(this._getKey(res.index), res); // 单条写入缓存
            this.classicMap[this._getKey(res.index)] = res;
            wx.setStorageSync(this.classicKey, this.classicMap); // 将当期期刊写入缓存(对象形式多条写入)
          }
        })
      } else { // 有缓存，从缓存中读取数据
        sCallback(classic);
      }
    }
  }

  /* 是否是第一期期刊 */
  isFirst(index) { // 判断当前期刊是否是第一期,根据当前期刊号index判断
    return index === 1 ? true : false;
  }

  /* 是否是最后一期期刊 */
  isLatest(index) { // 判断当前期刊是否是最新一期(最后一期), 根据最新一期期刊数据可获得期刊号index
    let latestIndex = this._getLatestIndex() || 8; // 从缓存中读取最新一期期刊号, 8为mock数据最后一期期刊号
    return index === latestIndex ? true : false;
  }

  /* 保存当前最新的期刊号index到缓存 */
  _setLatestIndex(index) {
    // setStorageSync同步写入缓存(写入数据量小使用), setStroage异步写入缓存
    wx.setStorageSync('latest', index); // 设置缓存
  }

  /* 读取缓存 */
  _getLatestIndex() { // 获取缓存中当前最新的期刊号index
    let index = wx.getStorageSync('latest'); // 同步读取缓存
    return index;
  }

  /* 设置每条期刊写入缓存的key值 */
  _getKey(index) {
    let key = 'classic' + index;
    return key;
  }
}

export { ClassicModel };
