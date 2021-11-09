import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Home as HomeRoute } from "./screens/Home";

// @ts-ignore
const AccountRoute = lazy(() => import("account/Account"));

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomeRoute />
      </Route>
      <Route path="/account">
        <Suspense fallback={null}>
          <AccountRoute />
        </Suspense>
      </Route>
    </Switch>
  );
};

export default Routes;
