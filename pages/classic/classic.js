// pages/classic/classic.js

import { ClassicModel } from '../../models/classic.js'; // 重要：只能使用相对路径
import { LikeModel } from '../../models/like.js'; // 重要：只能使用相对路径

let classicModel = new ClassicModel();
let likeModel = new LikeModel();

Page({

  /**
   * 页面的初始数据
   * 1、对一个page页面来说，wxml里面所用的所有变量都是有data所决定的；
   * 2、对一个组件来说，wxml里面使用的变量除了data还有properties;
   */
  data: {
    classic: null, // 也可以省略声明
    latest: true, // 最新一期期刊(当前期刊)
    first: false // 第一期期刊
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest(res => {
      // 数据更新
      this.setData({ // 更新数据必须使用setData方法
        classic: res // data中可不必声明wxml可直接使用
      })
      // 获取期刊号：latestClassic: latestIndex , currentClassic: currentIndex
    });
  },

  onLike(event) { // 点赞
    // console.log(event);
    let behavior = event.detail.behavior;
    let { id, type } = this.data.classic;
    likeModel.like(behavior, id, type);
  },

  // onPrevious: function(event) { // 获取前一期期刊(获取后一期期刊类似)
  //   console.log(event);
  //   let index = this.data.classic.index;
  //   classicModel.getPrevious(index, res => {
  //     // console.log(JSON.stringify(res));
  //     this.setData({ // 更新当前页面classic数据
  //       classic: res,
  //       latest: classicModel.isLatest(res.index),
  //       first: classicModel.isFirst(res.index)
  //     })
  //   })
  // },

  onPrevious: function(event) {
    this._updateClassic('previous');
  },

  onNext: function(event) {
    this._updateClassic('next');
  },

  _updateClassic: function(nextOrPrevious) { // 获取前一期和后一期期刊
    let index = this.data.classic.index; // 当前期刊的期刊号(序号)
    classicModel.getClassic(index, nextOrPrevious, res => {
      // console.log(JSON.stringify(res));
      this.setData({ // 更新当前页面classic数据
        classic: res,
        latest: classicModel.isLatest(res.index),
        first: classicModel.isFirst(res.index)
      })
    })
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
