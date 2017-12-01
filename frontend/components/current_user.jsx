import React from 'react';

// CurrentUser
export default (props) => (
  <div className="sb-current-user-div">
    <p className="sb-current-user">{props.currentUser.displayname}</p>
  </div>
);
