import React from 'react';
import { Link } from 'react-router-dom';




export default ({currentUser, login}) => {

  const guestLogin = () => (
    login({
      email: 'guest@gmail.com',
      password: 'password'
    })
  );

  if (!currentUser) {
    return (
      <div>
        <img className="splash-img" src="https://a.slack-edge.com/52353/marketing/img/home/home_illo.png" />
        <a className="demo-btn" onClick={guestLogin}>Get started</a>
      </div>
    );
  } else {
    return null;
  }
};
