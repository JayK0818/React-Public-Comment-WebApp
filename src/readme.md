# 性能检测

  react-addons-perf  在react16.0 之前使用的
  react-addons-pure-render-mixin  重写shouldComponentUpdate
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

  Immutable.js

  localStorage.setItem() 在ios safari无痕模式下 直接使用会报错。

  判断两个值是否相等使用 ===, 除了判断对象是否包含某个属性外 obj['c'] == null;
    