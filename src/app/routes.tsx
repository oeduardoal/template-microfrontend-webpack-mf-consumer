import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

// @ts-ignore
const AccountRoute = lazy(() => import("account/Account"));

const Routes = () => {
  return (
    <Switch>
      <Route path="/account">
        <Suspense fallback={null}>
          <AccountRoute />
        </Suspense>
      </Route>
    </Switch>
  );
};

export default Routes;
