import merge from 'lodash/merge';
import { RECEIVE_USERS } from '../actions/users';
import { RECEIVE_MESSAGES_WITH_USERS } from '../actions/message';

// usersReducer
export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGES_WITH_USERS:
      console.log("------------ in users reducer -------------");
      return merge({}, state, action.users);
    default:
      return state;
  }
};
