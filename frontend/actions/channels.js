import * as ChannelsUtils from '../utils/channels';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';

export const UPDATE_CHANNEL_SEARCH_RESULTS = 'UPDATE_CHANNEL_SEARCH_RESULTS';

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const fetchChannels = () => dispatch => (
  ChannelsUtils.fetchChannels().then(
    channels => dispatch({
      type: RECEIVE_CHANNELS,
      channels
    })
  )
);

export const createChannel = channelName => dispatch => (
  ChannelsUtils.createChannel(channelName).then(
    channel => {
    dispatch(receiveChannel(channel));
    return channel;
    }
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