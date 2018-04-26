import { receiveMessage } from './message.js';
import {
  receiveUsers // works for both channels and rooms
} from './users';
import {
  receiveChannel
} from './channels';
import {
  receiveRoom
} from './rooms/rooms_actions';
import {
  receiveCurrentUser
} from './session';

export const setSocket = (email) => (dispatch) => {
  if (window.App.channel) {
    removeSocket(email);
  }
  addSocket(email, dispatch);
};

export const removeSocket = email => {
  window.App.cable.subscriptions.remove(window.App.channel);
};

export const addSocket = (email, dispatch) => {
  window.App.channel = window.App.cable.subscriptions.create({
    channel: 'UserChannel',
    email: email
  }, {
    connected: () => {},
    disconnected: () => {},
    received: (data) => {
      if (data.message) {
        dispatch(receiveMessage(data.message));
      }
      if (data.users) {
        dispatch(receiveUsers(data.users));
      }
      if (data.channel) {
        dispatch(receiveChannel(data.channel));
      }
      if (data.room) {
        dispatch(receiveRoom(data.room));
      }
      if (data.currentUser) {
        dispatch(receiveCurrentUser(data.currentUser));
      }
    }
  });
};
