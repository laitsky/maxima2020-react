/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { StateMainPage, DaftarState, StateOrgDetail } from '../views';

const StateRouter = () => (
  <Switch>
    <Route path="/state" exact component={StateMainPage} />
    <Route
      path="/state/daftar/day1"
      exact
      render={(props) => <DaftarState {...props} day={1} />}
    />
    <Route
      path="/state/daftar/day2"
      exact
      render={(props) => <DaftarState {...props} day={2} />}
    />
    <Route
      path="/state/daftar/day3"
      exact
      render={(props) => <DaftarState {...props} day={3} />}
    />
    <Route
      path="/state/detail-organisator/:organisator"
      exact
      component={StateOrgDetail}
    />
  </Switch>
);

export default StateRouter;
