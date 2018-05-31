import { connect } from 'react-redux';
// import { showUserDisplay } from '../../actions/user_display';
import Message from './message';
import { editMessage } from '../../../actions/message.js';

const mapDispatchToProps = {
  editMessage
};

export default connect(
  null,
  mapDispatchToProps
)(Message);
