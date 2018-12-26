// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String, // 期刊内容
    first: Boolean, // 当前期刊是否是第一期
    latest: Boolean // 当前期刊是否是最新(最后)一期
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc: 'images/triangle.dis@left.png',
    leftSrc: 'images/triangle@left.png',
    disRightSrc: 'images/triangle.dis@right.png',
    rightSrc: 'images/triangle@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft: function(event) {
      if (!this.properties.latest) {
        this.triggerEvent('left', {}, {});
      }
    },

    onRight: function(event) {
      if (!this.properties.first) {
        this.triggerEvent('right', {}, {});
      }
    }
  }
})
