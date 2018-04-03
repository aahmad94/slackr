import { connect } from 'react-redux';
import { login  } from '../../actions/session';
import Signin from './signin';
import { addSubscriberToChannel } from '../../actions/channels';
import { receiveErrors } from '../../actions/session';

const mapStateToProps = (state) => ({
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (formUser) => dispatch(login(formUser)),
  addSubscriberToChannel: (channelId) => dispatch(addSubscriberToChannel(channelId)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
