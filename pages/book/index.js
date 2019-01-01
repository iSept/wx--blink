// pages/book/index.js
import { BookModel } from '../../models/book.js';
const bookModel = new BookModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // js解决异步方式：
    // 1、callback回调函数 回调地狱 剥夺函数的return能力
    // 2、promise 支持多个异步等待合并，不需要层层传递callback
    // 3、async/await ES2017 小程序目前不支持

    // /*
    //  * I、promise是一个对象，对象能保存状态
    //  * 不是一个具体的函数，函数不能保存状态会马上返回（闭包函数除外）
		//  * 异步代码写在promise函数参数中
    // */
    // const promise = new Promise((resolve, reject) => {
    // 	/* promise 三种状态: pending(进行中) fulfilled(已成功) rejected(已失败) */
    // 	wx.getSystemInfo({
    // 		success: res => {
    // 			/* 修改状态: pending(进行中) -> fulfilled(成功), 之后promise状态会凝固 */
    // 			resolve(res);
    // 		},
    // 		fail: err => {
    // 			/* 修改状态: pending(进行中) -> rejected(失败), 之后promise状态会凝固 */
    // 			reject(err);
    // 		}
    // 	})
    // })
    // /*
    //  * II、then(): 拿到异步执行后的结果状态
    //  */
    // promise.then(
    // 	res => { // promise成功时候的回调函数，传入调用的结果
    // 		console.log(' success：',  res);
    // 	},
    // 	err => { // promise失败时候的回调函数
    // 		console.log('fail：', err);
    // 	}
    // )
    // /*
    //  * III、promise链式调用：例如链式调用 api1, api2, api3
    //  */
    // bookModel
    // 	.getHotList()
    // 	.then(res => {
    //    /* res -> api1 结果 */
    // 		console.log(res)
    // 		/* api2 调用 */
    // 		return bookModel.getMyBookCount(); // 返回一个promise
    // 	})
    // 	.then(res => {
    // 		/* res -> api2 结果 */
    //    console.log(res)
    //    /* api3 调用 */
    // 		return bookModel.getMyBookCount() // 返回一个promise
    // 	})
    // 	.then(res => {
    //    /* res -> api3 结果 */
    // 		console.log(res)
    // 	})

    bookModel.getHotList().then(res => {
      console.log(res);
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
