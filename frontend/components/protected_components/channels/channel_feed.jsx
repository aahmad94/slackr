import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from '../message/message'; 


class ChannelFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentWillReceiveProps(nextProps) {
    const oldChannelId = this.props.match.params.channelId;
    const currentChannelId = nextProps.match.params.channelId;
    if (oldChannelId !== currentChannelId) {
      Promise.all([
        this.props.addSubscriberToChannel(currentChannelId).then(
        () => this.props.fetchChannelUsers(currentChannelId)),
        this.props.fetchChannelMessages(currentChannelId),
        this.props.fetchChannels(),
      ]).then(() => this.setState({loading: false}));
    }
  }

  componentDidMount() {
    const channelId = this.props.match.params.channelId;
    Promise.all([
      this.props.addSubscriberToChannel(channelId).then(
      () => this.props.fetchChannelUsers(channelId)),
      this.props.fetchChannelMessages(channelId),
      this.props.fetchChannels()
    ]).then(() => this.setState({loading: false}));
  }

  componentDidUpdate() {

    if (!this.state.loading) {
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behaviour: 'smooth' });
  }

  render () {
    if (!this.state.loading) {
      return (
        <div className='feed'>
          <h4 className='channel-title'>
            {`#${this.props.channels[this.props.match.params.channelId].channel_name}`.toLowerCase()}
          </h4>
          <div className='message-list'>
            <ul>
              {
                this.props.messages.map(
                  (message, idx) => {
                    if (this.props.match.params.channelId == message.interface_id) {
                      return (
                        <Message
                          key={message.id}
                          user={this.props.users[message.user_id]}
                          message={message}
                          />);
                    } else {
                      return null;
                    }
                  })
                }
              <div ref={el => { this.el = el; }} />
            </ul>
          </div>
        </div>
        );
    } else {
      return (
        <div className="sk-fading-circle">
          <div className="sk-circle1 sk-circle"></div>
          <div className="sk-circle2 sk-circle"></div>
          <div className="sk-circle3 sk-circle"></div>
          <div className="sk-circle4 sk-circle"></div>
          <div className="sk-circle5 sk-circle"></div>
          <div className="sk-circle6 sk-circle"></div>
          <div className="sk-circle7 sk-circle"></div>
          <div className="sk-circle8 sk-circle"></div>
          <div className="sk-circle9 sk-circle"></div>
          <div className="sk-circle10 sk-circle"></div>
          <div className="sk-circle11 sk-circle"></div>
          <div className="sk-circle12 sk-circle"></div>
        </div>
      );
    }
  }
}
export default ChannelFeed;
