import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import GuestLoginContainer from './guest/guest_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils.jsx';

const App = () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route path="/" component={GuestLoginContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={SigninContainer} />
  </div>
);

export default App;
