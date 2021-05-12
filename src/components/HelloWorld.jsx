import React from 'react';

class HelloWorld extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    console.log('this:',this);
    console.log(Date.now());
  }
  handleC(msg,event){
    console.log(this,msg,event);
  }
  render(){
    return (
      <div>
        <p>HelloWorld</p>
        <button onClick={this.handleClick}>click me</button>
        <button onClick={this.handleC.bind(this,'msg')}>111</button>
      </div>
    )
  }
}

export default HelloWorld;