// components/classic/music/index.js
import { classicBeh } from '../classic-beh.js';

const mMgr = wx.getBackgroundAudioManager(); // 背景音频管理器

Component({
  /**
   * 组件的属性列表
   */
  // behaviors 是用于组件间代码共享的特性
  behaviors: [classicBeh],

  properties: { // 组件间公用的数据放到了behavior中了
    // img: String,
    // content: String,
    hidden: Boolean, // 兼容hidden在自定义组件的使用
    src: String, // 音乐src
    title: String, // 音乐标题
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false, // 是否播放状态
    playSrc: 'images/player@playing.png',
    pauseSrc: 'images/player@waitting.png'
  },

  attached: function() {
    this._recoverStatus(); // 切换组件：重置音乐播放器状态
    this._monitorSwitch(); // 操作音乐播放总控开关：重置音乐播放器状态
  },

  /* hidden 不会触发完整生命周期, 适用于频繁切换 */
  /* wx:if 会触发完整生命周期, 不大可能改变 */
  /* 微信生命周期, 组件退出界面节点树时执行 */
  // detached: function() {
  // 	mMgr.stop();
  // },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay: function(event) { // 播放事件
      if (!this.data.playing) { // I、暂停状态
        this.setData({ // 切换播放图片
          playing: true
        })
        mMgr.src = this.properties.src; // 播放音乐
        mMgr.title = this.properties.title;
      } else { // II、播放状态
        this.setData({ // 切换暂停图片
          playing: false
        })
        mMgr.pause(); // 暂停播放音乐
      }
    },

    _recoverStatus: function() { // 重置音乐播放器状态
      if (mMgr.paused) { // (无音乐播放情况)设置音乐暂停或停止的状态
        this.setData({
          playing: false
        })
        return false;
      }
      if (mMgr.src === this.properties.src) { // (有音乐播放且就是当前组件的音乐情况)设置当前播放的音乐的状态
        this.setData({
          playing: true
        })
      }
    },

    _monitorSwitch: function() { // 音乐播放总控开关：重置音乐播放器状态
      mMgr.onPlay(() => { // 播放音乐
        this._recoverStatus();
      })
      mMgr.onPause(() => { // 暂停音乐
        this._recoverStatus();
      })
      mMgr.onStop(() => { // 关掉总控开关
        this._recoverStatus();
      })
      mMgr.onEnded(() => { // 音乐播放完成
        this._recoverStatus();
      })
    }
  }
})
