import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { LoginForm } from './components/LoginForm/LoginForm';
import { NoMatch } from './components/NoMatch';

const RoutesNoAuth = (
  <Switch>
    <Route exact path="/" component={LoginForm} />
    <Route component={NoMatch} />
  </Switch>
);

export default RoutesNoAuth;
