import React, { Component } from 'react';

export default class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannelMessage(this.state).then(
      () => this.setState({
      body: ''
      })
    );
  }

  updateMessage(e) {
    this.setState({
      body: e.target.value
    });
  }

  render () {
    if (Object.keys(this.props.channels).length === 0) {
      return null;
    }
    const channelName = this.props.channels[this.props.match.params.channelId].channel_name;
    return (
      <form
        className='msg-form'
        onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          value={this.state.body}
          placeholder={`Message #${channelName.toLowerCase()}`}
          onChange={e => this.updateMessage(e)}
        />
      </form>
    );
  }
}
