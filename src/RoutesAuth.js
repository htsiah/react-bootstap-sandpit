import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './components/Home';
import { NoMatch } from './components/NoMatch';
import PageLoader from './components/shared/PageLoader';

const ExamplesCounter = lazy(() => import('./components/ExamplesCounter'));
const ExamplesFetchRandomUsers = lazy(() => import('./components/ExamplesFetchRandomUsers'));
const ExamplesImageSlider = lazy(() => import('./components/ExamplesImageSlider'));
const ExamplesReactHookForm = lazy(() => import('./components/ExamplesReactHookForm/ExamplesReactHookForm'));
const ExamplesReactLazyLoad = lazy(() => import('./components/ExamplesReactLazyLoad'));

const RoutesAuth = (
  <Suspense fallback={<PageLoader />}>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/examples/counter" component={ExamplesCounter} />
      <Route exact path="/examples/fetchrandomuser" component={ExamplesFetchRandomUsers} />
      <Route exact path="/examples/ExamplesImageSlider" component={ExamplesImageSlider} />
      <Route exact path="/examples/ExamplesReactHookForm" component={ExamplesReactHookForm} />
      <Route exact path="/examples/ExamplesReactLazyLoad" component={ExamplesReactLazyLoad} />
      <Route component={NoMatch} />
    </Switch>
  </Suspense>
);

export default RoutesAuth;
