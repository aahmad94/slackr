import { connect } from 'react-redux';
import CurrentUser from "./current_user";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps, null)(CurrentUser);
