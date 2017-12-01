import React from 'react';
import { Link } from 'react-router-dom';

// <p className="welcome-message">Hello, {currentUser.displayname}</p>
export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <Link to="/messages" className="logo">Wookiee</Link>
      <a className="btn" onClick={logout}>Log Out</a>
    </div>
  ) : (
    <div>
      <Link to="/" className="logo">Wookiee</Link>
      <Link className="btn" to="/signup">Sign up</Link>
      <Link className="btn" to="/login">Log in</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <div>
        {display}
      </div>
    </header>
  );
};
