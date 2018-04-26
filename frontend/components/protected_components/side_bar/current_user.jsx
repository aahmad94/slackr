import React from 'react';

// CurrentUser
export default class CurrentUser extends React.Component {
  componentDidMount() {
    const { setSocket, currentUser } = this.props;
    setSocket(currentUser.email);
  }

  render () {
    const { currentUser } = this.props;
    return (
      <div className="sb-current-user-div">
        <p className="sb-current-user">{currentUser.displayname}</p>
      </div>
    );
  }
}