// components/classic/music/index.js
import { classicBeh } from '../classic-beh.js';

Component({
  /**
   * 组件的属性列表
   */
  // behaviors 是用于组件间代码共享的特性
  behaviors: [classicBeh],

  properties: { // 组件间公用的数据放到了behavior中了
    // img: String,
    // content: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc: 'images/player@waitting.png',
    playSrc: 'images/player@playing.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
