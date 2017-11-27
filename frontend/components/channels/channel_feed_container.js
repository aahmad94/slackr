import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchChannelMessages } from '../../actions/message';
import ChannelFeed from './channel_feed';
import { setSocket } from '../../actions/action_cable';

const mapStateToProps = (state, ownProps) => ({
  // channel: state.entities.channels[ownProps.match.params.channelId],
  messages: Object.values(state.entities.messages),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  fetchChannelMessages: (channelId) => dispatch(fetchChannelMessages(channelId)),
  setSocket: (channelName) => dispatch(setSocket(channelName))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChannelFeed));
