import React from 'react';
import ChannelsContainer from './channels_container';
import CurrentUserContainer from './current_user_container';


export default () => (
  <div className="sb-container">
    <CurrentUserContainer />
    <ChannelsContainer />
  </div>
);
