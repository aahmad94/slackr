import { receiveMessage } from './message.js';

export const setSocket = (username) => (dispatch) => {
  if (window.App.channel) {
    removeSocket();
  }
  addSocket(username, dispatch);
};

export const removeSocket = username => {
  window.App.cable.subscriptions.remove(window.App.channel);
};

export const addSocket = (username, dispatch) => {
  window.App.channel = window.App.cable.subscriptions.create({
    channel: 'UserChannel',
    username
  }, {
    connected: () => {},
    disconnected: () => {},
    received: (data) => {
      if (data.message) {
        dispatch(receiveMessage(data.message));
      }
    }
  });
};
