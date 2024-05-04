import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Common.css'; // Assuming this contains global styles you may have

function Login() {
  return (
    <div className="background-image">
      <div className="content-container">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="form-input"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" className="form-input"/>
          </div>
          <div className="form-actions">
            <button type="submit" className="button">Login</button>
          </div>
        </form>
        <Link to="/" className="button">Back</Link>
      </div>
    </div>
  );
}

export default Login;
