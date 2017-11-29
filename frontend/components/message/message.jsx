import React from 'react';

export default ({user, message}) => (
  <div>
    <li className="msg-item">
      <p>{user.displayname}</p>
      <p>{new Date(message.created_at).toLocaleString()}</p>
      <p>{message.body}</p>
    </li>
  </div>
);
