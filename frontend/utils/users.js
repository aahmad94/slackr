export const fetchChannelUsers = (channelId) => (
  $.ajax({
    url: `/api/channels/${channelId}/users`,
    method: 'GET'
  })
);

export const searchUsers = query => (
  $.ajax({
    url: `api/users/search/${query}`
  })
);
