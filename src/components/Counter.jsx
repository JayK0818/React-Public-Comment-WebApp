import React from 'react';

class Counter extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let counter = this.props.counter;
    return (
      <div>
        子组件接受的counter {counter}
      </div>
    )
  }
}

export default Counter;