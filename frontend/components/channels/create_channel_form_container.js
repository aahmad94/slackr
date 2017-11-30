import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createChannel } from '../../actions/channels';
import CreateChannelForm from './create_channel_form';

const mapDispatchToProps = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel)),
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(CreateChannelForm));
