import React from 'react';
import ChannelsContainer from './channels_container';
import CurrentUserContainer from './current_user_container';
import HomeBtn from './home_btn';
import LogoutBtn from './logout_btn';


export default () => (
  <div className="sb-container">
    <div className="sb-btns">
      <HomeBtn />
      <LogoutBtn />
    </div>
    <CurrentUserContainer />
    <ChannelsContainer />
  </div>
);
