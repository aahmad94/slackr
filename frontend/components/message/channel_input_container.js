import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createChannelMessage } from '../../actions/message';
import { fetchChannels } from '../../actions/channels';
import MessageInput from './message_input';

const mapStateToProps = (state) => ({
  channels: state.entities.channels
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createChannelMessage:
  (message) => dispatch(createChannelMessage(
                                             message,
                                             ownProps.match.params.channelId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MessageInput));
