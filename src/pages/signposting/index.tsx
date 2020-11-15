import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import DV from "./dv";

const Routes = () => (
  <Switch>
    <Route path="/signposting" component={Home} exact />
    <Route path="/signposting/dv" component={DV} exact />
  </Switch>
);

export default Routes;
