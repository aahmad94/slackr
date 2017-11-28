import { connect } from 'react-redux';
import Channels from './channels';
import { fetchChannels } from '../actions/channels';

const mapStateToProps = (state) => ({
  channels: Object.values(state.entities.channels),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchChannels: () => dispatch(fetchChannels())
});

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
