export const fetchChannels = () => (
  $.ajax({
    url: `/api/channels`,
    method: 'GET'
  })
);

export const createChannel = channel => (
  $.ajax({
    url: `api/channels`,
    method: 'POST',
    data: { channel }
  })
);

export const addSubscriberToChannel = channelId => (
  $.ajax({
    url: `api/channels/add_subscriber/${channelId}`,
    method: 'POST'
  })
);

export const removeSubscriberFromChannel = channelId => (
  $.ajax({
    url: `api/channels/remove_subscriber/${channelId}`,
    method: 'DELETE'
  })
);

export const searchChannels = query => (
  $.ajax({
    url: `api/channels/search/${query}`
  })
);