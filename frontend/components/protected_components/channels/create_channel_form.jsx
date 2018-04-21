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
    this.props.createChannel(this.state)
    .then((channel) =>
      this.props.history.push(`/messages/channels/${channel.id}/`))
    .then(this.props.closeModal);
  }

  handleChange (e, type) {
    this.setState({
      [type]: e.target.value
    });
  }


  render() {
    return (
      <div>
        <form
          className="create-channel-form"
          onSubmit={e => this.handleSubmit(e)}>
          <label>
            Channels
          </label>
          <input
            className="create-channel-input"
            type="text"
            placeholder="Create a channel"
            onChange={e => this.handleChange(e, 'channel_name')}
          />
        </form>
      </div>
    );
  }
}
