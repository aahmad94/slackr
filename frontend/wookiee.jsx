import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { signup, login, logout } from './utils/session';

document.addEventListener('DOMContentLoaded', () => {

  let preloadedState = {};

  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }

  const store = configureStore(preloadedState);
  const root = document.getElementById('root');

  window.getState = store.getState;
  window.signup = signup;
  window.login = login;
  window.logout = logout;

  ReactDOM.render(<Root store = {store} />, root);
});
