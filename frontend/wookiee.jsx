import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as ChannelsActions from './actions/channels';


document.addEventListener('DOMContentLoaded', () => {
  
  var http = require("http");
  setInterval(function() {
    http.get("http://wookiee.herokuapp.com");
  }, 300000); // every 5 minutes (300000)
  
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
  
  // tests here
  window.store = store;
  window.searchChannels = ChannelsActions.searchChannels;

  ReactDOM.render(<Root store = {store} />, root);
});
