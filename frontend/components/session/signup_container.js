import { connect } from 'react-redux';
import { createNewUser, login  } from '../../actions/session';
import Signup from './signup';

const mapStateToProps = (state) => ({
      loggedIn: Boolean(state.session.currentUser),
      // errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login' ? login : createNewUser);
  return {
    processForm: (formUser) => dispatch(processForm(formUser)),
    formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
