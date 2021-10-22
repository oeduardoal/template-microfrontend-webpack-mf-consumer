import React from "react";
import { Switch, Route } from "react-router-dom";

import HomeRoute from "./home-route";
import SomeRoute from "./some-route";

const Routes = () => {
  return (
    <Switch>
      <Route path="/home">
        <HomeRoute />
      </Route>
      <Route path="/some-route">
        <SomeRoute />
      </Route>
    </Switch>
  );
};

export default Routes;
