import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { NoMatch } from "./components/NoMatch";
import { Layout } from "./Layout/Layout";
import { ExamplesCounter } from "./components/ExamplesCounter";
import { ExamplesFetchRandomUsers } from "./components/ExamplesFetchRandomUsers";
import { ExamplesImageSlider } from "./components/ExamplesImageSlider";

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/examples/counter" component={ExamplesCounter} />
            <Route
              exact
              path="/examples/fetchrandomuser"
              component={ExamplesFetchRandomUsers}
            />
            <Route
              exact
              path="/examples/ExamplesImageSlider"
              component={ExamplesImageSlider}
            />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
