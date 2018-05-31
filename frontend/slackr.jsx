import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// temporarily require test actions
import * as ChannelsActions from './actions/channels';
import * as RoomsActions from './actions/rooms/rooms_actions';
import * as RoomsUtils from './actions/rooms/rooms_utils';

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
  // window.store = store;
  // window.searchChannels = ChannelsActions.searchChannels;
  // window.createRoom = RoomsActions.createRoom;
  // window.leaveRoom = RoomsActions.leaveRoom;
  // window.addUser = RoomsActions.addUser;
  // window.fetchRoomsAndUsers = RoomsUtils.fetchRoomsAndUsers;

  ReactDOM.render(<Root store = {store} />, root);
});
