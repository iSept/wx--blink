import { config, tips } from '../config/index.js';

class HTTP {
  /*
  * promise封装HTTP
  * 使用对象解构赋值，方便传参
  * 明确参数列表，方便他人熟悉
  */
  request({ url, data = {}, method = 'GET'}) {
    return new Promise((resolve, reject) => {
      // 必填参数在默认参数之前
      this._request(resolve, reject, url, data, method);
    })
  }

  _request(resolve, reject, url, data, method) {
    wx.request({
      url: config.api_base_url + url,
      method,
      data,
      header: {
        'content-type': 'application/json',
        appkey: config.appkey
      },
      success: res => {
        // 判断以2 (2xx) 开头的状态码为正确
        // 异常不要返回到回调中，就在request中处理记录日志并showToaset一个统一的错误即可
        // console.log('res==', res);
        const code = res.statusCode.toString(); // statusCode转为字符串，才能用字符串startsWith方法
        if (code.startsWith('2')) { // I、请求成功情况
          resolve(res.data);
        } else { // II、服务器异常情况
          reject(); // 将promise状态改为fail
          const error_code = res.data.error_code;
          this._show_error(error_code);
        }
      },
      fail: err => { // III、api调用失败情况(断网可验证)
        reject();
        console.log(err);
        this._show_error();
      }
    })
  }

  /* wechat 没有私有概念, 这里是一种写法 */
  _show_error(error_code = 1) {
    const tip = tips[error_code]
    wx.showToast({
      title: tip || tips[1],
      icon: 'none',
      duration: 2000
    })
  }
}

export { HTTP };
