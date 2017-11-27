import * as MessageUtils from '../utils/message';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';

const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages,
});

export const createChannelMessage = (message, channelId) => (dispatch) => (
  MessageUtils.createChannelMessage(message, channelId)
);

export const fetchChannelMessagesAndUsers = (channelId) => dispatch => (
  MessageUtils.fetchChannelMessages(channelId).then(
    (messages) => dispatch(receiveMessages(messages))
  )
);