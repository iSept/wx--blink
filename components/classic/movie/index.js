// components/classic/movie.js
import { classicBeh } from '../classic-beh.js';

Component({
  /**
   * 组件的属性列表
   */
  // behaviors 是用于组件间代码共享的特性
  // 多个behavior中定义相同的变量，组件会继承最后一个（生命周期方法除外，会依次执行）
  behaviors: [classicBeh],

  // 1、组件间公用的数据放到了behavior中了，如果这里也定义了和behavior中相同的变量会覆盖behavior中的变量
  // 2、生命周期方法不会被覆盖，会依次执行behavior中方法，最后执行组件内的生命周期方法
  properties: {
    // img: String,
    // content: String
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
