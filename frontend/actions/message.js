import * as MessageUtils from '../utils/message';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGES_WITH_USERS = 'RECEIVE_MESSAGES_WITH_USERS';
export const EDIT_MESSAGE = 'EDIT_MESSAGE';

const editMessageAction = (newMessage) => {
  return {
    type: EDIT_MESSAGE,
    newMessage
  };
};

export const receiveMessage = (message) => {
  return {
    type: RECEIVE_MESSAGE,
    message
  };
};

const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const receiveMessagesWithUsers = ({ messages, users }) => ({
  type: RECEIVE_MESSAGES_WITH_USERS,
  messages,
  users
});


export const createChannelMessage = (message, channelId) => (dispatch) => (
  MessageUtils.createChannelMessage(message, channelId)
);

export const createRoomMessage = (message, roomId) => dispatch => (
  MessageUtils.createRoomMessage(message, roomId)
);

// export const fetchChannelMessages = (channelId) => dispatch => (
//   MessageUtils.fetchChannelMessagesWithUsers(channelId).then(
//     (messages) => dispatch(receiveMessages(messages))
//   )
// );


export const fetchChannelMessagesWithUsers = channelId => dispatch => (
  MessageUtils.fetchChannelMessagesWithUsers(channelId).then(
    data => dispatch(receiveMessagesWithUsers(data))
  )
);

export const fetchRoomMessagesWithUsers = roomId => dispatch => (
  MessageUtils.fetchRoomMessagesWithUsers(roomId).then(
    data => dispatch(receiveMessagesWithUsers(data))
  )
);

export const editMessage = newMessage => dispatch => (
  dispatch(editMessageAction(newMessage))
);