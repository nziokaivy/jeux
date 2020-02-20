import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/NotFound.css';


const NotFound = () => {
    return (
  <div className="not-found-column">
        <h1 className="not-found-title">JEUX</h1>
    <div className="card">
        <div className="not-found-text">
        <h1>Woops! You've moved <br /> so fast and got lost....</h1>
        <p>The page you are looking for doesn't exist.Please check the URL for spellings or capitalizations.
            If you're having trouble, try visit the Jeux homepage 
        </p>
        <Link className="not-found-link" to="/"><p>Go Home</p></Link>
        </div>
        <div className="not-found-image">
        </div>
    </div>
  </div>
    )
}

export default NotFound;
