import { connect } from 'react-redux';
import { login  } from '../../actions/session';
import Signin from './signin';
import { receiveErrors } from '../../actions/session.';

const mapStateToProps = (state) => ({
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (formUser) => dispatch(login(formUser)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
