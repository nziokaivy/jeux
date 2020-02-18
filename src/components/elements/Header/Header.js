import React from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
// import controllerImg from '../../../images/game-controller.png';
import './Header.css';
 
const Header = ()=> {
    return (
      <div className="topnav">
      {/* <Link className="icon" to="/"><img className="controller_icon" src={controllerImg} height="30" width="30"/>Jeux</Link> */}
      <Link to="/all-creators">Creators</Link>
      <Link to="/all-tags">Tags</Link>
      <Link to="/all-stores">Stores</Link>
    </div>
    );
  }

export default Header;

