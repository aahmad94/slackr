import { connect } from 'react-redux';
import { createNewUser  } from '../../actions/session';
import Signup from './signup';
import { receiveErrors } from '../../actions/session';


const mapStateToProps = (state) => ({
  errors: state.errors.session
});



const mapDispatchToProps = (dispatch, ownProps) => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  clearErrors: () => dispatch(receiveErrors([]))

});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
