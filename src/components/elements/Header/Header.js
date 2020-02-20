import React from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import './Header.css';
 
const Header = ()=> {
    return (
      <div className="topnav">
      <Link to="/">JEUX</Link>
      <Link to="/all-creators">Creators</Link>
      <Link to="/all-tags">Tags</Link>
      <Link to="/all-stores">Stores</Link>
    </div>
    );
  }

export default Header;

