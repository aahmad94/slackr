import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {

  render() {

  return (
    <header className="nav-bar">
        <Link to="/" className="logo">Slackr</Link>
      <div className="nav-btns">
        <Link className="btn" to="/signup">Sign up</Link>
        <Link className="btn" to="/login">Log in</Link>
      </div>
    </header>
  );
  }
}
