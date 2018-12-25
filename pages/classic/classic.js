// pages/classic/classic.js

import { ClassicModel } from '../../models/classic.js'; // 重要：只能使用相对路径

let classic = new ClassicModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: null, // 也可以省略声明
    test: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.test);
    classic.getLatest(res => {
      this.setData({ // 更新数据必须使用setData方法
        classic: res // data中可不必声明wxml可直接使用
      })
    });
    // http.request({
    //   url: 'classic/latest',
    //   success: res => {
    //     console.log(res);
    //   }
    // })
    // wx.request({
    //   url: 'http://bl.7yue.pro/v1/classic/latest',
    //   header: {
    //     appkey: 'xxxx'
    //   },
    //   success: res => { // 回调函数形式
    //     console.log(JSON.stringify(res.data));
    //     console.log(this.data.test);
    //     // {"content":"人生不能像做菜，把所有的料准备好才下锅","fav_nums":363,"id":1,"image":"http://bl.7yue.pro/images/movie.8.png","index":8,"like_status":1,"pubdate":"2018-06-22","title":"李安《饮食男女 》","type":100}
    //   }
    // })
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