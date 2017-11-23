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

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return(
      <div className='session-form'>
        <form>
          <h1>Sign up</h1>
          <p>Enter your <strong>email address</strong> and <strong>password</strong></p>

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

          <button onClick={this.handleSubmit}>Continue &#x2192;</button>
        </form>
      </div>
    );
  }
}

export default Signup;
