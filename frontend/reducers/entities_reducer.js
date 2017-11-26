import { combineReducers } from 'redux';
import messagesReducer from './messages_reducer';
// entitiesReducer
export default combineReducers({
  messages: messagesReducer
});
