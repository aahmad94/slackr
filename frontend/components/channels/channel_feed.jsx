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
  }

  componentWillMount() {
    Promise.all([
      this.props.fetchChannelUsers(1),
      this.props.fetchChannelMessages(1),
      this.props.fetchChannels(),
      this.props.setSocket("General"),
    ]).then(this.setState({loading: false}));
  }


  render () {
    if (!this.state.loading) {
      return (
        <div className='feed'>
          <h4 className='channel-title'>General</h4>
          <ul>
            {
              this.props.messages.map(
                (message) => (
                  <Message
                    key={message.id}
                    user={this.props.users[1]}
                    message={message}
                    />
                ))
              }
            </ul>
          </div>
        );
    } else {
      <div>
        loading...
      </div>;
    }
  }

}
export default ChannelFeed;
