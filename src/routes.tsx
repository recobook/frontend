import React from "react";
import {Redirect, Route,Switch } from "react-router-dom";

import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ForgoutPassword from './pages/ForgoutPassword'
import MainPage from './pages/MainPage'
import Profile from './pages/Profile'

const PrivateRoute  = ({ component: Component, ...rest }:any) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("isAuthenticated") === 'true' ? (
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
        <Route path="/forgoutPassword" exact component={ForgoutPassword} />  
        <PrivateRoute path="/" exact component={MainPage}  />
        <PrivateRoute path="/profile" exact component={Profile}  />
      </Switch>
  );
}

