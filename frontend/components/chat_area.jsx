import React from 'react';
import ChannelMessages from './channels/channel_messages';
import SideBar from './side_bar';

export default (props) => (
  <div className="chat-area">
    <SideBar />
    <ChannelMessages />
  </div>
);
