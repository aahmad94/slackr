import { combineReducers } from 'redux';
import messagesReducer from './messages_reducer';
import channelsReducer from './channels_reducer';
import usersReducer from './users_reducer'
// entitiesReducer
export default combineReducers({
  users: usersReducer,
  messages: messagesReducer,
  channels: channelsReducer
});
