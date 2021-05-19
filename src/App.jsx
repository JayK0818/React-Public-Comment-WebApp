import React from 'react';
import {Switch,Route} from 'react-router-dom';
import HelloWorld from '@/components/HelloWorld';
import MyComponent from '@/components/MyComponent';
import LifeCycle from '@/components/LifeCycle';
import Counter from '@/components/Counter';
import routes from '@/router';
import {connect} from 'react-redux';

function App(props){
  console.log('app-props:',props);
  const [player,setPlayer] = React.useState({firstName:"kyrie",lastName:"irving"})
  React.useEffect(() => {
    fetch("/api/player")
    .then(response => response.json())
    .then(response => {
      console.log('response:',response);
    })
  },[]);
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
      <Switch>
        {routes.map((route,i) => {
          return <Route path={route.path} key={'route-'+i}><route.component/></Route>
        })}
      </Switch>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    counter:state
  }
}


App = connect(mapStateToProps)(App);

export default App;