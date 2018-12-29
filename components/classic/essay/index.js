// components/classic/essay/index.js
import { classicBeh } from '../classic-beh.js';

Component({
  /**
   * 组件的属性列表
   */
  // behaviors 是用于组件间代码共享的特性，类似于一些编程语言中的“mixins”或“traits”。
  behaviors: [classicBeh],

  properties: { // 组件间公用的数据放到了behavior中了
    // img: String,
    // content: String,
    hidden: Boolean // 兼容hidden在自定义组件的使用
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
