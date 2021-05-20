import React from 'react';
import {Switch,Route} from 'react-router-dom';
import routes from '@/router';
import './common/css/iconfont.scss';

function App(){
  return (
    <div>
      <i className="iconfont icon-user"></i>
      <Switch>
        {routes.map((route,i) => {
          return <Route path={route.path} key={'route-'+i}><route.component/></Route>
        })}
      </Switch>
    </div>
  )
}


export default App;