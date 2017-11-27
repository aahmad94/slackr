import * as ChannelsUtils from '../utils/channels';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';

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

export const createChannel = channelData => dispatch => (
  ChannelsUtils.createChannel(channelData).then(
    channel => dispatch(receiveChannel(channel))
  )
);
