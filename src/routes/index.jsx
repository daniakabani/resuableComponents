import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import TestPage from "pages/test";
import HomePage from "pages/home";
import NavBar from "components/navBar";
import NotFoundPage from "pages/404";

const Routes = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home">
        <HomePage />
      </Route>
      <Route exact path="/test">
        <TestPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
