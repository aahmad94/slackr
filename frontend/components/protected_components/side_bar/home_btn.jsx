import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

const renderHomeBtn = (props) => {
  return <div className="home-btn">
    <Link to="/messages/channels/1/" className="logo">Slackr</Link>
  </div>;
};

export default withRouter(connect(null, null)(renderHomeBtn));
