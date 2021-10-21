import React from "react";
import { Switch, Route } from "react-router-dom";
// @ts-ignore
import Account from "account/Account";

const Routes = () => {
  return (
    <Switch>
      <Route path="/account">
        <Account />
      </Route>
    </Switch>
  );
};

export default Routes;
