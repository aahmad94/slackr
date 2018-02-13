import React from 'react';
import { Link } from 'react-router-dom';




export default (props) => {

  const guestLogin = () => (
    props.login({
      email: 'guest@gmail.com',
      password: 'password'
    })
    .then(() => props.history.push('/messages'))
  );

  if (!props.currentUser) {
    return (
      <div className="splash">
      <img src="https://a.slack-edge.com/52353/marketing/img/home/home_illo.png" />
        <div className="splash-info">
          <h1>
            Where Work Happens
          </h1>
          <p>
            When your team needs to kick off a project, hire a new employee, deploy some code, review a sales contract, finalize next year's budget, measure an A/B test, plan your next office opening, and more, Wookiee has you covered.</p>
          <a className="demo-btn" onClick={guestLogin}>Demo</a>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
