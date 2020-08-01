import React from 'react';
import { Box, Container } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import { OrganisatorDashboard } from '../views';

const OrganisatorRouter = ({ Sidebar }) => (
  <Box display="flex" height="100vh" fontFamily="Open Sans">
    <Sidebar />
    <Container>
      <Switch>
        <Route
          path="/organisator"
          exact
          component={OrganisatorDashboard}
        />
      </Switch>
    </Container>
  </Box>
);

export default OrganisatorRouter;
