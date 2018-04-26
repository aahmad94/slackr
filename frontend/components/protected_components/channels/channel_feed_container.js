import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchChannelMessagesWithUsers } from '../../../actions/message';
import { fetchChannels } from '../../../actions/channels';
import ChannelFeed from './channel_feed';

const mapStateToProps = (state, ownProps) => ({
  users: state.entities.users,
  channels: state.entities.channels,
  messages: Object.values(state.entities.messages),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
    fetchChannelMessagesWithUsers: (channelId) => dispatch(fetchChannelMessagesWithUsers(channelId)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChannelFeed));
