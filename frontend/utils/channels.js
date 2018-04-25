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

export const updateChannel = channel => (
  $.ajax({
    url: `api/channels/${channel.id}`,
    method: 'PATCH',
    data: { channel }
  })
);

export const removeSubscriberFromChannel = channelId => (
  $.ajax({
    url: `api/channels/remove_subscriber/${channelId}`,
    method: 'DELETE'
  })
);

export const addSubscriberToChannel = channelId => (
  $.ajax({
    url: `api/channels/add_subscriber/${channelId}`,
    method: 'POST'
  })
);


export const searchChannels = query => (
  $.ajax({
    url: `api/channels/search/${query}`
  })
);

export const updateLastRead = channelId => (
  $.ajax({
    url: `/api/channels/update_last_read/${channelId}`,
    method: 'PATCH'
  })
);