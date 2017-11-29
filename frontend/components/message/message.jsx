import React from 'react';

export default ({user, message}) => (
  <div>
    <li>
      <p>{user.dipsplayname}</p>
      <p>{new Date(message.created_at).toLocaleString()}</p>
      <p>{message.body}</p>
    </li>
  </div>
);
