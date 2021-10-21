import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// @ts-ignore
import Account from "account/Account";

const Routes = () => {
  return (
    <Switch>
      <Route path="/account">
        <Account name="Eduardo Almeida" />
      </Route>
    </Switch>
  );
};

export default Routes;
