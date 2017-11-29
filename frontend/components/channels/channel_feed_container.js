import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchChannelMessages } from '../../actions/message';
import { fetchChannels } from '../../actions/channels';
import { fetchChannelUsers } from '../../actions/users';
import { setSocket } from '../../actions/action_cable';
import ChannelFeed from './channel_feed';

const mapStateToProps = (state, ownProps) => ({
  users: Object.values(state.entities.users),
  channel: Object.values(state.entities.channels),
  messages: Object.values(state.entities.messages),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchChannelUsers: (channelId) => dispatch(fetchChannelUsers(channelId)),
    fetchChannels: () => dispatch(fetchChannels()),
    fetchChannelMessages: (channelId) => dispatch(fetchChannelMessages(channelId)),
    setSocket: (channelName) => dispatch(setSocket(channelName))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChannelFeed));
