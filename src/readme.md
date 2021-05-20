# 性能检测

  react-addons-perf  在react16.0 之前使用的
  react-addons-pure-render-mixin  重写shouldComponentUpdate
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

  Immutable.js

  localStorage.setItem() 在ios safari无痕模式下 直接使用会报错。
    