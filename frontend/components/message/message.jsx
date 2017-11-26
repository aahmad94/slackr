import React from 'react';

export default ({ user, message, showUserDisplay}) => (
  <div>
    <div onClick={() => showUserDisplay(user.id)}>
      {user.displayname}
      {new Date(message.createdAt).toLocaleString()}
      {message.body}
    </div>
  </div>
);
