import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  LoginPage,
  DaftarMaba,
  DaftarOrganisator,
  ResetPassword,
} from '../views';

const AuthRouter = () => (
  <Switch>
    <Route path="/login" exact component={LoginPage} />
    <Route path="/daftar" exact component={DaftarMaba} />
    <Route
      path="/daftar-organisator"
      exact
      component={DaftarOrganisator}
    />
    <Route path="/reset-password" exact component={ResetPassword} />
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
