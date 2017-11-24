import { connect } from 'react-redux';
import { login  } from '../../actions/session';
import GuestLogin from './splash';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (formUser) => dispatch(login(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(GuestLogin);
