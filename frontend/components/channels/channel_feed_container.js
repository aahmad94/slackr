import { connect } from 'react-redux';
import { fetchChannelMessages} from '../../actions/message';
import ChannelFeed from './channel_feed';

const mapStateToProps = (state, ownProps) => ({
  channel: state.entities.channels[ownProps.match.params.channelId],
  messages: Object.values(fetchChannelMessages(
                                               ownProps
                                               .match
                                               .params
                                               .channelId)),
  currentUser: state.session.currentUser,
  users: state.entities.users
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchChannelMessages: (channelId) => dispatch(fetchChannelMessages(channelId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelFeed);
