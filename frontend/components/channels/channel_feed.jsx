import React, { Component } from 'react';
import Message from '../message/message';

class ChannelFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    console.log(this.props.match.params);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      this.props.fetchChannelMessages(nextProps.match.params.channelId);
      this.props.fetchChannelUsers(nextProps.match.params.channelId);
    }

  }

  componentWillMount() {
    const channelId = this.props.match.params.channelId;
    Promise.all([
      this.props.fetchChannelUsers(this.props.match.params.channelId),
      this.props.fetchChannelMessages(this.props.match.params.channelId),
      this.props.fetchChannels()
    ]).then(() => this.props.setSocket(
      this.props.channels[this.props.match.params.channelId].channel_name))
      .then(() => this.setState({loading: false}));
  }


  render () {
    // debugger;
    if (!this.state.loading) {
      return (
        <div className='feed'>
          <h4 className='channel-title'></h4>
          <div className='message-list'>
            <ul>
              {
                this.props.messages.map(
                  (message) => (
                    <Message
                    key={message.id}
                    user={this.props.users[message.user_id]}
                    message={message}
                    />
                  ))
                }
            </ul>
          </div>
        </div>
        );
    } else {
      return (
        <div>
        loading...
      </div>
      );
    }
  }

}
export default ChannelFeed;
