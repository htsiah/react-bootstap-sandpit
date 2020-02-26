import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './components/Home';
import { ExamplesCounter } from './components/ExamplesCounter';
import { ExamplesFetchRandomUsers } from './components/ExamplesFetchRandomUsers';
import { ExamplesImageSlider } from './components/ExamplesImageSlider';
import { ExamplesReactHookForm } from './components/ExamplesReactHookForm/ExamplesReactHookForm';
import { NoMatch } from './components/NoMatch';

const RoutesAuth = (
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/examples/counter" component={ExamplesCounter} />
    <Route exact path="/examples/fetchrandomuser" component={ExamplesFetchRandomUsers} />
    <Route exact path="/examples/ExamplesImageSlider" component={ExamplesImageSlider} />
    <Route exact path="/examples/ExamplesReactHookForm" component={ExamplesReactHookForm} />
    <Route component={NoMatch} />
  </Switch>
);

export default RoutesAuth;
