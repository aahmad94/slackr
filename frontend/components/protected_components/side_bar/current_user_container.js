import { connect } from 'react-redux';
import CurrentUser from "./current_user";
import { setSocket } from '../../../actions/action_cable';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setSocket: (email) => dispatch(setSocket(email))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUser);
