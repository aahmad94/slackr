import React from 'react';

export default class CreateChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { channel_name: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel(this.state).then((newChannel) =>
      this.props.history.push(`/messages/channels/${newChannel.id}/`));
  }

  handleChange (e, type) {
    this.setState({
      [type]: e.target.value
    });
  }


  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          placeholder="Create a channel"
          onChange={e => this.update(e, 'channel_name')}
        />

      </form>
    );
  }
}
