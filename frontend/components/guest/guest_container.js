import { connect } from 'react-redux';
import { login  } from '../../actions/session';
import GuestLogin from './guest';

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (formUser) => dispatch(login(formUser))
});

export default connect(null, mapDispatchToProps)(GuestLogin);
