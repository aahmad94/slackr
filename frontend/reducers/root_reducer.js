import { combineReducers } from 'redux';
import sessionReducer from './session';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';
import entitiesReducer from './entities_reducer';
import  usersReducer from './users_reducer';

// rootReducer
export default combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer,
});
