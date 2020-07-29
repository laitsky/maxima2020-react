import React from 'react';
import { Route } from 'react-router-dom';
import { StateMainPage, DaftarState } from '../views';

const StateRouter = () => (
  <>
    <Route path="/state" exact strict component={StateMainPage} />
    <Route
      path="/state/daftar"
      exact
      strict
      component={DaftarState}
    />
  </>
);

export default StateRouter;
