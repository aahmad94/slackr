import merge from 'lodash/merge';
import { RECEIVE_USERS } from '../actions/users';
import { RECEIVE_MESSAGES_WITH_USERS } from '../actions/message';
import {
  RECEIVE_ROOMS_AND_USERS
} from '../actions/rooms/rooms_actions';
import {
  UPDATE_USERS_SEARCH_RESULTS
} from '../actions/users';

// usersReducer
export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
    case RECEIVE_MESSAGES_WITH_USERS:
      return merge({}, state, action.users);
    case RECEIVE_ROOMS_AND_USERS:
      return merge({}, state, action.users);
    case UPDATE_USERS_SEARCH_RESULTS:
      return merge({}, state, action.usersSearchResults);
    default:
      return state;
  }
};
