import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { postUser, postSession, deleteSession } from './utils/session';
// import { createChannelMessage, fetchChannelMessages } from './utils/message';
import { fetchChannelMessages } from './actions/message';
import { fetchChannels } from './actions/channels';
import { fetchChannelUsers } from './actions/users';

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
  window.postUser = postUser;
  window.login = postSession;
  window.dispatch = store.dispatch;
  window.deleteSession = deleteSession;
  window.fetchChannelMessages = fetchChannelMessages;
  window.fetchChannels = fetchChannels;
  window.fetchChannelUsers = fetchChannelUsers;


  ReactDOM.render(<Root store = {store} />, root);
});
