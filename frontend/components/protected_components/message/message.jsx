import React from 'react';
import EditMessage from './edit_message';

export default ({user, message, editMessage}) => {
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
        <EditMessage editMessage={editMessage} message={message}/>
    </div>
  );
  }
};