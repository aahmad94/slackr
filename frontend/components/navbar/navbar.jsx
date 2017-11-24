import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p className="welcome-message">Hello, {currentUser.displayname}</p>
      <a className="btn" onClick={logout}>Log Out</a>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/signup">Sign up</Link>
      <Link className="btn" to="/login">Log in</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <Link to="/" className="logo">Wookiee</Link>
      <div>
        {display}
      </div>
    </header>
  );
};
