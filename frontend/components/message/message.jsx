import React from 'react';

export default ({user, message, shouldScroll}) => {
  if (!user) {
    return (<div></div>);
  } else {
    return (<div>
      <li
        className="msg-item"
        >
        <p className="user-display-name">{user.displayname} </p>
        <p className="timestamp">{new Date(message.created_at).toLocaleString()}</p>
        <p className="msg-body">{message.body}</p>
      </li>
    </div>
  );
  }
};