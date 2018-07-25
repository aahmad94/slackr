import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  searchChannels,
  addSubscriberToChannel
} from '../../../actions/channels';
import ChannelSearch from './channel_search';

const arrayChannelSearchResults = state => (
  Object.keys(state.ui.channelSearchResults).map(
    id => state.ui.channelSearchResults[id]
  )
);

const mapStateToProps = state => ({
  channelSearchResults: arrayChannelSearchResults(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  searchChannels: (query) => dispatch(searchChannels(query)),
  clearSearch: () => dispatch({
    type: 'UPDATE_CHANNEL_SEARCH_RESULTS',
    channelSearchResults: {}
  }),
  addSubscriberToChannel: channelId => dispatch(addSubscriberToChannel(channelId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelSearch));
