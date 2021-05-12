import React from 'react';
import HelloWorld from '@/components/HelloWorld';
import MyComponent from '@/components/MyComponent';
import LifeCycle from '@/components/LifeCycle';
function App(){
  const [player,setPlayer] = React.useState({firstName:"kyrie",lastName:"irving"})
  function changePlayer(){
    setPlayer({
      firstName:"lebron",
      lastName:"james"
    })
  }
  return (
    <div>
      <HelloWorld/>
      <MyComponent player={player} changePlayer={changePlayer}></MyComponent>
      <LifeCycle/>
    </div>
  )
}

export default App;