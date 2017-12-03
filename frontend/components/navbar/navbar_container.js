import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { withRouter } from 'react-router-dom';

import { logout } from '../../actions/session';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
