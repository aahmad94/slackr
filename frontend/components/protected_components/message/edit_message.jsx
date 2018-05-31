import React from 'react';

export default class editMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      newMessage: ""
    };
  }

  handleChange(e) {
    this.setState({newMessage: `${e.target.value}`});
  }
  

  render() {
    return (
      <form onSubmit={e => (this.props.editMessage(this.state.newMessage))}>
        <label>Edit</label>
        <input
          onChange={ e => this.handleChange(e)}
        ></input>
      </form>
    );
  }
}