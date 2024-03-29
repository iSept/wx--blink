// components/link/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 属性数据
    like: {
      type: Boolean,
      value: false,
      observer: function() {}
    },
    count: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 内部数据（数据绑定）
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLink: function(event) {
      let like = this.properties.like;
      let count = this.properties.count;
      count = like ? count - 1 : count + 1;
      this.setData({
        // 设置properties数据方法
        count,
        like: !like
      });
      let behavior = this.properties.like ? 'like' : 'cancel';
      // 激活自定义事件, 参数一：事件名称, 参数二设置事件event事件的detail属性
      this.triggerEvent('like', { behavior });
      // 这里的properties和data数据一模一样，小程序做了合并
      // console.log(this.properties, this.data);
    }
  }
});
