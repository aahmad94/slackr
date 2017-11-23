import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p className="welcome-message">Welcome {currentUser.displayname}</p>
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
      <h2 className="logo">Wookiee</h2>
      <div>
        {display}
      </div>
    </header>
  );
};
