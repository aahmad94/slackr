import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import {
  fetchRoomMessagesWithUsers
} from '../../../actions/message';
import {
  updateLastRead
} from '../../../actions/rooms/rooms_actions';
import RoomFeed from './room_feed';

const mapStateToProps = (state, props) => ({
  currentUser: state.session.currentUser,
  room: state.entities.rooms[props.match.params.roomId],
  messages: Object.values(state.entities.messages),
  users: state.entities.users
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchRoomMessagesWithUsers: roomId => dispatch(
    fetchRoomMessagesWithUsers(roomId)
  ),
  updateLastRead: roomId => dispatch(updateLastRead(roomId))
  // fetchRoomUsers: roomId => dispatch(
  //   fetchRoomUsers(roomId)
  // )
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomFeed));
