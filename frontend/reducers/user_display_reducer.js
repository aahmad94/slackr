import {
  SHOW_USER_DISPLAY,
  HIDE_USER_DISPLAY
} from '../actions/user_display';

// displayUserReducer
export default (state = { userId: null, isShown: false}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SHOW_USER_DISPLAY:
      return { userId: action.userId, isShown: true };
    case HIDE_USER_DISPLAY:
      return { userId: null, isShown: false };
    default:
      return state;
  }
};
