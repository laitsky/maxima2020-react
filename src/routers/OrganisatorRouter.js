import React from 'react';
import { Route } from 'react-router-dom';
import { OrganisatorDashboard } from '../views';

const OrganisatorRouter = () => (
  <>
    <Route
      path="/organisator"
      exact
      strict
      component={OrganisatorDashboard}
    />
  </>
);

export default OrganisatorRouter;
