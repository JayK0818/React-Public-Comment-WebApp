import ReactDOM from 'react-dom'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import '@/common/css/reset.scss';

let isDev = process.env.NODE_ENV;
console.log('IsDevelopment',isDev);

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById("root")
)