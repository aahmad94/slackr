import React from 'react';

export default ({message}) => (
  <div>
    <li>
      <p>{new Date(message.created_at).toLocaleString()}</p>
      <h4>{message.body}</h4>
    </li>
  </div>
);
