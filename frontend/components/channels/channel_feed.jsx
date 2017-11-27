import React, { Component } from 'react';
import MessageContainer from '../message/message_container';

export default class ChannelFeed extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <h1>this.props.channel.channel_name</h1>
        <ul>
          {
            this.props.messages.map(
              (message) => (
                <MessageContainer
                  key={message.id}
                  user={this.props.users[message.userId]}
                  message={message}
                />
            ))
          }
        </ul>
      </div>
    );
  }
}
