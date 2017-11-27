import React, { Component } from 'react';
import Message from '../message/message';

class ChannelFeed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChannelMessages(4);
  }


  render () {
    return (
      <div>
        <h1>Channel 4</h1>
        <ul>
          {
            this.props.messages.map(
              (message) => (
                <Message
                  key={message.id}
                  message={message}
                />
            ))
          }
        </ul>
      </div>
    );
  }
}
export default ChannelFeed;
