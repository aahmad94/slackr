import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchChannelMessages } from '../../actions/message';
import ChannelFeed from './channel_feed';

const mapStateToProps = (state, ownProps) => ({
  // channel: state.entities.channels[ownProps.match.params.channelId],
  messages: Object.values(state.entities.messages),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchChannelMessages: (channelId) => dispatch(fetchChannelMessages(channelId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChannelFeed));
