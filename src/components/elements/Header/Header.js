import React from 'react';
import controllerImg from '../../../images/game-controller.png';
import './Header.css';
 
const Header = ()=> {
    return (
      <div className="topnav">
      <a className="icon" href="#home"><img className="controller_icon" src={controllerImg} height="30" width="30"/>Jeux</a>
      <a href="#games">Games</a>
      <a href="#All Developers">Developers</a>
      <a href="#Genres">Genres</a>
      <a href="#Genres">Stores</a>
    </div>
    );
  }

export default Header;

