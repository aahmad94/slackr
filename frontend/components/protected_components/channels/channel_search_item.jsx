import React from 'react';

export default ({ channel, addSubscriberToChannel, currentUser }) => (
  <div className='channel-search-item'>
    <div className='information'>
      <strong># {channel.channel_name}</strong>
      <div>
        {
          channel.user_ids.length > 1 ?
          `${channel.user_ids.length} users` : 
          `${channel.user_ids.length} user`
        }        
      </div>
    </div>
    {(channel.user_ids.includes(currentUser.id)) ?
      <a className='disabled'>Joined</a> :
      <a className='enabled'
        onClick={addSubscriberToChannel}>Join</a>}
  </div>
);
                               