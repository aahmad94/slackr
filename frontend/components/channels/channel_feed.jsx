import React, { Component } from 'react';
import Message from '../message/message';

class ChannelFeed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillMount() {
    this.props.fetchChannelMessages(1);
    this.props.setSocket("General");
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
