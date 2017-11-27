import { connect } from 'react-redux';
import { createChannelMessage } from '../../actions/message';
import MessageInput from './message_input';

const mapDispatchToProps = (dispatch, ownProps) => ({
  createChannelMessage: (message) => dispatch(createChannelMessage, ownProps.match.params.channelId)
});

export default connect(null, mapDispatchToProps)(MessageInput);
