export const createChannelMessage = (message, channelId) => (
  $.ajax({
    url: `/api/channels/${channelId}/messages`,
    method: 'POST',
    data: { message }
  })
);

export const fetchChannelMessage = (channelId) => ({
  url: `/api/channels/${channelId}/messages`,
  method: 'GET'
});
