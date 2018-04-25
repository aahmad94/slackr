import * as ChannelsUtils from '../utils/channels';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';

export const UPDATE_CHANNEL_SEARCH_RESULTS = 'UPDATE_CHANNEL_SEARCH_RESULTS';

export const fetchChannels = () => dispatch => (
  ChannelsUtils.fetchChannels().then(
    channels => dispatch({
      type: RECEIVE_CHANNELS,
      channels
    })
  )
);

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

const removeChannel = channelId => ({
  type: REMOVE_CHANNEL,
  channelId
});


export const createChannel = channelName => dispatch => (
  ChannelsUtils.createChannel(channelName).then(
    channel => {
    dispatch(receiveChannel(channel));
    return channel;
    }
  )
);

export const removeSubscriberFromChannel = channelId => dispatch => (
  ChannelsUtils.removeSubscriberFromChannel(channelId).then(
    id => dispatch(removeChannel(id))
  )
);

export const addSubscriberToChannel = channelId => dispatch => (
  ChannelsUtils.addSubscriberToChannel(channelId).then(
    channel => dispatch(receiveChannel(channel))
  )
);

export const searchChannels = query => dispatch => {
  if (query) {
    ChannelsUtils.searchChannels(query).then(
      channelSearchResults => dispatch({
        type: UPDATE_CHANNEL_SEARCH_RESULTS,
        channelSearchResults
      })
    );
  } else {
    dispatch({
      type: UPDATE_CHANNEL_SEARCH_RESULTS,
      channelSearchResults: {}
    });
  }
};

export const updateLastRead = channelId => dispatch => (
  ChannelsUtils.updateLastRead(channelId)
);
