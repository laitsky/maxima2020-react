import React from 'react';
import { Box } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import { DashboardAppBar } from '../components';
import { OrganisatorDashboard, LihatPeserta } from '../views';

const OrganisatorRouter = () => (
  <Box
    display="flex"
    height="100vh"
    fontFamily="Open Sans"
    style={{ marginTop: '3em' }}
  >
    <DashboardAppBar
      title="Laman Organisator MAXIMA 2020"
      logout
      minimal="organisator"
    />
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
  </Box>
);

export default OrganisatorRouter;
