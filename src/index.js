import ReactDOM from 'react-dom'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import '@/common/css/reset.scss';
import store from './store';
import {Provider} from 'react-redux';

store.subscribe(() => {console.log('store-counter:',store.getState())});

store.dispatch({type:'INCREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:"INCREMENT"});


let isDev = process.env.NODE_ENV;
console.log('IsDevelopment',isDev);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)