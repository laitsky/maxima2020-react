import React from 'react';
import { Box, Container } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import { OrganisatorDashboard, LihatPeserta } from '../views';

const OrganisatorRouter = () => (
  <Box display="flex" height="100vh" fontFamily="Open Sans">
    <Container>
      <Switch>
        <Route
          path="/organisator"
          exact
          component={OrganisatorDashboard}
        />
        <Route
          path="/organisator/lihat-peserta/:stateId"
          exact
          component={LihatPeserta}
        />
      </Switch>
    </Container>
  </Box>
);

export default OrganisatorRouter;
