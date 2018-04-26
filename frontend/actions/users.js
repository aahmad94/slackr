import * as UsersUtils from '../utils/users';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const UPDATE_USERS_SEARCH_RESULTS = 'UPDATE_USERS_SEARCH_RESULTS';

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const fetchChannelUsers = (channelId) => (dispatch) => (
  UsersUtils.fetchChannelUsers(channelId).then(
    (users) => dispatch(receiveUsers(users))
  )
);

export const searchUsers = query => dispatch => {
  if (query) {
    UsersUtils.searchUsers(query).then(
      usersSearchResults => dispatch({
        type: UPDATE_USERS_SEARCH_RESULTS,
        usersSearchResults
      })
    );
  } else {
    dispatch({
      type: UPDATE_USERS_SEARCH_RESULTS,
      usersSearchResults: {}
    });
  }
};
