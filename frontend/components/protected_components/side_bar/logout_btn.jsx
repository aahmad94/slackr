import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../../actions/session';

const renderLogoutBtn = (props) => {
  return <div className="logout-btn">
    <i 
      className="fas fa-sign-out-alt"
      onClick={props.logout}></i>
  </div>;
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(null, mapDispatchToProps)(renderLogoutBtn));
