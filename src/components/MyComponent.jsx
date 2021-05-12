import React from 'react';

function MyComponent(props){
  function handleChangePlayer(){
    props.changePlayer()
  }
  return (
    <div>
      <p>我是子组件的数据: 
        <span>firstName:{props.player.firstName}---</span>
        <span>lastName:{props.player.lastName}</span>
        <button onClick={handleChangePlayer}>change-player</button>
      </p>
    </div>
  )
}

export default MyComponent;