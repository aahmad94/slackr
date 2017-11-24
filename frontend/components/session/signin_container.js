import { connect } from 'react-redux';
import { login  } from '../../actions/session';
import Signin from './signin';

const mapStateToProps = (state) => ({
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (formUser) => dispatch(login(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
