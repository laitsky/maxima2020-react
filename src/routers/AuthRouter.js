import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage, DaftarMaba } from '../views';

const AuthRouter = () => (
  <Switch>
    <Route path="/login" exact component={LoginPage} />
    <Route path="/daftar" exact component={DaftarMaba} />
    <Route
      path="/logout"
      exact
      strict
      render={() => {
        window.sessionStorage.clear();
        window.location = '/';
      }}
    />
  </Switch>
);

export default AuthRouter;
