import React, { Component } from 'react';
import Message from '../message/message';

class ChannelFeed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChannels();
  }

  componentWillMount() {
    this.props.fetchChannelMessages(1);
    this.props.setSocket("General");
  }


  render () {
    return (
      <div>
        <h4>{this.props.channels[this.props.match.params.channelId]}</h4>
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
