import { combineReducers } from 'redux';
import userDisplayReducer from './user_display_reducer';

// uiReducer
export default combineReducers({
  userDisplay: userDisplayReducer
});
