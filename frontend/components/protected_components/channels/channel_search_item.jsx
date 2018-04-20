import React from 'react';

export default ({ channel, addSubscriberToChannel, currentUser }) => (
  <div className='channel-search-item'>
    <div className='information'>
      <strong>{channel.channel_name}</strong><br />
      #{channel.channel_name}<br />
      {channel.user_ids.length} user
    </div>
    {(channel.user_ids.includes(currentUser.id)) ?
      <button className='disabled'>Joined</button> :
      <button className='enabled'
        onClick={addSubscriberToChannel}>Join</button>}
  </div>
);
