import React from "react";
import {Redirect, Route,Switch } from "react-router-dom";

import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";

const PrivateRoute  = ({ component: Component, ...rest }:any) => (
  <Route
    {...rest}
    render={(props) =>
      true ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
)


export default function Routes() {
  return (
      <Switch>
        <Route path="/login" exact component={Login} />  
        <Route path="/signup" exact component={CreateAccount} />  
      </Switch>
  );
}

