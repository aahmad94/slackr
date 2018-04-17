import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      displayname: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const formUser = this.state;
    this.props.createNewUser(formUser)
      .then(() => this.props.history.push('/messages/channels/1'));
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div className='session-form'>
        {this.renderErrors()}
        <form>
          <h1>Sign up</h1>
          <p>Enter your <strong>email address</strong>, <strong>display name</strong>, and <strong>password</strong></p>

          <input
            type='text'
            placeholder='name@example.com'
            value={this.state.email}
            onChange={this.handleInput('email')}
          /><br/>

           <input
             type='text'
             placeholder='display name'
             value={this.state.displayname}
             onChange={this.handleInput('displayname')}
          /><br/>

           <input
               type='password'
               placeholder='password'
               value={this.state.password}
               onChange={this.handleInput('password')}
            /><br/>

          <button onClick={this.handleSubmit}>Continue <strong>&#x2192;</strong></button>
        </form>
      </div>
    );
  }
}

export default Signup;
