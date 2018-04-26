import React from 'react';

import MessageContainer from './message_container';
import UsersSearchContainer from './users_search_container';
import RoomFeedUsersSearchContainer from './room_feed_users_search_container';

export default class RoomFeed extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      usersSearchIsOpen: false,
      loader: ''
    };
    if (!props.messages[0]) {
      this.state.loader = <div className="loader"></div>;
    }
  }

  // componentWillUnmount () {
  //   clearTimeout(this.updateLastReadTimeout);
  // }

  componentDidMount () {
    console.log("IN COMPONENT DID MOUNT");
    console.log(this.props);
    const {
      fetchRoomMessagesWithUsers, updateLastRead, match
    } = this.props;

    fetchRoomMessagesWithUsers(
      match.params.roomId
    ).then(
      () => this.refreshScroll()
    ).then(
      () => this.setState({ loader: '' })
    );

    this.updateLastReadTimeout = setTimeout(
      () => updateLastRead(match.params.roomId),
      1500
    );
  }

  componentWillReceiveProps (newProps) {
    console.log("IN COMPONENT WILL REVEIVE NEW PROPS");
    console.log(this.props);
    console.log({newProps});
    const {
      fetchRoomMessagesWithUsers, updateLastRead, match
    } = this.props;

    // check for change in roomId url
    if (match.params.roomId !==
        newProps.match.params.roomId) {

      if (!newProps.messages[0]) {
        this.setState({ loader: <div className="loader"></div> });
      }

      // refetch
      fetchRoomMessagesWithUsers(
        newProps.match.params.roomId
      // refresh scroll
      ).then(
        () => this.refreshScroll()
      ).then(
        () => this.setState({ loader: '' })
      );
      // updateLastRead
      clearTimeout(this.updateLastReadTimeout);
      this.updateLastReadTimeout = setTimeout(
        () => updateLastRead(newProps.match.params.roomId),
        1500
      );
    }

    // check for new message
    if (this.props.room.message_ids.length !==
        newProps.room.message_ids.length) {
      updateLastRead(match.params.roomId);
    }
  }

  componentDidUpdate (prevProps) {
    // check for new message
    if (this.props.room.message_ids.length !==
        prevProps.room.message_ids.length) {
      this.refreshScroll();
    }
  }

  refreshScroll () {
    this.refs.messages.scrollTop = this.refs.messages.scrollHeight;
  }

  toggleUsersSearch (roomId) {
    this.setState({
      usersSearchIsOpen: !this.state.usersSearchIsOpen
    });
  }

  render () {
    console.log("RENDERING ROOM FEED COMPONENT");
    const { currentUser, room, users } = this.props;
    const { usersSearchIsOpen } = this.state;
    console.log({ messages: this.props.messages.length });
    const messages = this.props.messages[0] && this.props.messages.map(
      message =>
      <MessageContainer key={message.id}
        user={users[message.user_id]}
        message={message} />
    );
    const roomUsers = room.user_ids.filter(
      id => id !== currentUser.id
    ).map(id => users[id].displayname || users[id].email).join(', ');

    return (
      <div className='feed'>
        <div className='context-information'>
          <h1>{roomUsers}</h1>
          <div className='users-search'>
            <span onClick={() => this.toggleUsersSearch()}>
              <i className="fa fa-users" aria-hidden="true"></i>
            </span>
            <RoomFeedUsersSearchContainer
              ref='searchBox'
              usersSearchIsOpen={usersSearchIsOpen}
              room={room}/>
          </div>
        </div>
        <ul className='messages' ref='messages'>
          {messages}
          {this.state.loader}
        </ul>
      </div>
    );
  }
}
