import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Channels from './channels';
import { fetchChannels } from '../actions/channels';

const mapStateToProps = (state) => ({
  channels: Object.values(state.entities.channels),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchChannels: () => dispatch(fetchChannels())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Channels));
