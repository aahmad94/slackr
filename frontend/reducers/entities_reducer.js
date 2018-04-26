import { combineReducers } from 'redux';
import messagesReducer from './messages_reducer';
import usersReducer from './users_reducer';
import channelsReducer from './channels_reducer';
import roomsReducer from './rooms_reducer';

export default combineReducers({
  users: usersReducer,
  messages: messagesReducer,
  channels: channelsReducer,
  rooms: roomsReducer
});
