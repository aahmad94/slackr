import React from 'react';
import HomeBtn from './home_btn';
import LogoutBtn from './logout_btn';
import CurrentUserContainer from './current_user_container';
import ChannelsContainer from './channels_container';
import RoomsContainer from './rooms_container';



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
