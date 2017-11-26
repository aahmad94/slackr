import { connect } from 'react-redux';
import { showUserDisplay } from '../../actions/user_display';
import Message from './message';

const mapDispatchToProps = dispatch => ({
  showUserDisplay: userId => dispatch(showUserDisplay(userId))
});

export default connect(
  null,
  mapDispatchToProps
)(Message);
