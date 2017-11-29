import merge from 'lodash/merge';
import { RECEIVE_USERS } from '../actions/users';

// usersReducer
export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    default:
      return state;
  }
};
