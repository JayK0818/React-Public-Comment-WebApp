import React from 'react';

class LifeCycle extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count:0
    }
    console.log('constructor');
  }
  handleClick(){
    this.setState(state => ({
      count:state.count + 1
    }))
  }
  componentDidMount(){
    console.log('componentDidMount');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  render(){
    console.log('render');
    return (
      <div>
        生命周期组件
        count: {this.state.count}
        <button onClick={this.handleClick.bind(this)}>click</button>
      </div>
    )
  }
}

export default LifeCycle;