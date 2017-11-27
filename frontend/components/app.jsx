import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import GuestLoginContainer from './splash/splash_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils.jsx';
import ChannelMessages from './channels/channel_messages';
const App = () => (
  <div>
      <Route path="/" component={NavBarContainer} />
      <Route exact path="/" component={GuestLoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={SigninContainer} />
      <ProtectedRoute path='/channels/:channelId/messages' component={ChannelMessages}/>
  </div>
);

export default App;
