import {
  UPDATE_USERS_SEARCH_RESULTS
} from '../../actions/users';
import merge from 'lodash/merge';

const usersSearchResultsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_USERS_SEARCH_RESULTS:
      return action.usersSearchResults;
    default:
      return state;
  }
};

export default usersSearchResultsReducer;
