import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import SignupContainer from './session/signup_container';

const App = () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route path="/signup" component={SignupContainer} />
  </div>
);

export default App;
