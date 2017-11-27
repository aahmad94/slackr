import { combineReducers } from 'redux';
import messagesReducer from './messages_reducer';
import channelsReducer from './channels_reducer';
// entitiesReducer
export default combineReducers({
  messages: messagesReducer,
  channels: channelsReducer
});
