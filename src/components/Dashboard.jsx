import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Common.css';

function Landingpage() {
  return (
    <div className="background-image">
      {/* New container div for centering content */}
      <div className="content-container">
        <h1>Welcome to your homwpage</h1>
        <p>lorem ipsum something</p>
        {/*<p>Select an option below:</p>
        <Link to="/login" className="button">Login</Link>
        <Link to="/register" className="button">Register</Link>*/}
      </div>
    </div>
  );
}

export default Landingpage;
