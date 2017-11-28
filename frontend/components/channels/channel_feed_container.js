import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchChannelMessages } from '../../actions/message';
import { fetchChannels } from '../../actions/channels';
import ChannelFeed from './channel_feed';
import { setSocket } from '../../actions/action_cable';

const mapStateToProps = (state, ownProps) => ({
  channels: Object.values(state.entities.channels),
  messages: Object.values(state.entities.messages),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
    fetchChannelMessages: (channelId) => dispatch(fetchChannelMessages(channelId)),
    setSocket: (channelName) => dispatch(setSocket(channelName))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChannelFeed));
