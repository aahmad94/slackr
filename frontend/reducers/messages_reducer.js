import {
  RECEIVE_MESSAGE, RECEIVE_MESSAGES, RECEIVE_MESSAGES_WITH_USERS 
} from '../actions/message';
import merge from 'lodash/merge';

// messagesReducer
export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return merge({}, state, {[action.message.id]: action.message});
    case RECEIVE_MESSAGES:
    case RECEIVE_MESSAGES_WITH_USERS:
      return merge({}, action.messages);
    default:
      return state;
  }
};
