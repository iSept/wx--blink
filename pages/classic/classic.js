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