/*
* behavior 行为：实现代码复用
* behaviors 是用于组件间代码共享的特性，类似于一些编程语言中的“mixins”或“traits”，具有多继承特性。
* 1、每个 behavior 可以包含一组属性、数据、生命周期函数和方法，组件引用它时，它的属性、数据和方法会被合并到组件中，生命周期函数也会在对应时机被调用。
* 2、每个组件可以引用多个 behavior 。 behavior 也可以引用其他 behavior 。
* 3、behavior 需要使用 Behavior() 构造器定义。
*/
let classicBeh = Behavior({
  properties: { // 组件间公用的properties
    img: String,
    content: String
  },

  data: {

  },

  // 生命周期函数在子类组件里面不会覆盖behavior中的方法，会依次执行
  attached: function() {

  },

  methods: {

  }
})

export { classicBeh };
