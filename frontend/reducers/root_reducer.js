import { combineReducers } from 'redux';
import sessionReducer from './session';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';

// rootReducer 
export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer
});
