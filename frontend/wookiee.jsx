import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { postUser, postSession, deleteSession } from './utils/session';
import { createChannelMessage, fetchChannelMessages } from './utils/message';

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
  window.deleteSession = deleteSession;
  window.createChannelMessage = createChannelMessage;
  window.fetchChannelMessages = fetchChannelMessages;


  ReactDOM.render(<Root store = {store} />, root);
});
