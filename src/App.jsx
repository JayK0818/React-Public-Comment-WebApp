import React from 'react';
import HelloWorld from '@/components/HelloWorld';
import MyComponent from '@/components/MyComponent';
import LifeCycle from '@/components/LifeCycle';
import Counter from '@/components/Counter';
function App(){
  const [player,setPlayer] = React.useState({firstName:"kyrie",lastName:"irving"})
  function changePlayer(){
    setPlayer({
      firstName:"lebron",
      lastName:"james"
    })
  }
  let [counter,setCounter] = React.useState(0)
  function handleClick(){
    setCounter(counter+1);
  }
  return (
    <div>
      <HelloWorld/>
      <MyComponent player={player} changePlayer={changePlayer}></MyComponent>
      <LifeCycle/>
      <Counter counter={counter}/><button onClick={handleClick}>click</button>
    </div>
  )
}

export default App;