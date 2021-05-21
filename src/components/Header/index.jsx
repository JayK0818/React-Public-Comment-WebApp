import React from 'react';
import './header.scss';
import '../../common/css/iconfont.scss';

function Header(props){
  return (
    <div className="header-container">
      <div className="city-content">
        <span className="current-city">{props.cityName}</span>
        <i className="iconfont icon-arrowdown"></i>
      </div>
      <div className="input-wrapper">
        <i className="iconfont icon-search"></i>
        <input type="text" className="search-input"/>
      </div>
      <div className="user-info">
        <i className="iconfont icon-user"></i>
      </div>
    </div>
  )
}

export default Header;