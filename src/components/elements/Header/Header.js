import React from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import '../../../assets/css/Header.css';
 
const Header = ()=> {
    return (
      <div className="topnav"> 
      {/* <Link to="/"><img className="controller_icon" src={controllerImg} height="30" width="30"/>JEUX</Link> */}
      <Link to="/all-creators">Creators</Link>
      <Link to="/all-tags">Tags</Link>
      <Link to="/all-stores">Stores</Link>
    </div>
    );
  }

export default Header;

