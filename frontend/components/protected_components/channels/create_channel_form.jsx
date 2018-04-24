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
    .then((channel) => {
      this.props.addSubscriberToChannel(channel.id);
      this.props.history.push(`/messages/channels/${channel.id}/`);
    })
    .then(this.props.closeModal);
  }

  handleChange (e, type) {
    this.setState({
      [type]: e.target.value
    });
  }

  render() {
    const {
      closeModal
    } = this.props;
    return (
      <div>
        <form
          className="create-channel-form"
          onSubmit={e => this.handleSubmit(e)}>
          <h1 className="modal-header">
            <label>
              Create a channel
            </label>
            <i
              className="fa fa-times"
              aria-hidden="true"
            onClick={closeModal}></i>
          </h1>
          <input
            className="create-channel-input"
            type="text"
            placeholder="Enter channel name"
            onChange={e => this.handleChange(e, 'channel_name')}
          />
        </form>
      </div>
    );
  }
}
