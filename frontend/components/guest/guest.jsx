import React from 'react';
import { Link } from 'react-router-dom';




export default ({currentUser, login}) => {

  const guestLogin = () => (
    login({
      email: 'guest@gmail.com',
      display: 'guest',
      password: 'password'
    })
  );

  if (!currentUser) {
    return (
      <div>
        <a className="btn" onClick={guestLogin}>Demo</a>
      </div>
    );
  }
};
