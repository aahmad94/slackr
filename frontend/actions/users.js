import * as UsersUtils from '../utils/users';

export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const fetchChannelUsers = (channelId) => (dispatch) => (
  UsersUtils.fetchChannelUsers(channelId).then(
    (users) => dispatch(receiveUsers(users))
  )
);
