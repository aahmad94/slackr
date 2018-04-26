import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils.jsx';

import NavBarContainer from './navbar/navbar_container';
import SignupContainer from './auth_components/signup_container';
import SigninContainer from './auth_components/signin_container';
import SplashContainer from './auth_components/splash_container';
import SideBar from './protected_components/side_bar/side_bar';
import ChannelMessages from './protected_components/channels/channel_messages';
import RoomMessages from './protected_components/rooms/room_messages';


const App = () => (
  <div className="app">
      <div className="auth-container">
        <AuthRoute path="/" component={NavBarContainer} />
        <Route exact path="/" component={SplashContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={SigninContainer} />
      </div>
      <ProtectedRoute path='/messages' component={SideBar} />
      <ProtectedRoute path='/messages/channels/:channelId' component={ChannelMessages} />
  </div>
);

export default App;
