import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createChannelMessage } from '../../actions/message';
import MessageInput from './message_input';

const mapDispatchToProps = (dispatch, ownProps) => ({
  createChannelMessage:
  (message) => dispatch(createChannelMessage(
                                             message,
                                             ownProps.match.params.channelId))
});

export default withRouter(
  connect(null, mapDispatchToProps)(MessageInput));
