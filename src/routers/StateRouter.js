import React from 'react';
import { Route } from 'react-router-dom';
import { StateMainPage } from '../views';

const StateRouter = () => (
  <Route path="/state" exact strict component={StateMainPage} />
);

export default StateRouter;
