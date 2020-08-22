import React from 'react';
import { Box } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import { DashboardAppBar } from '../components';
import { PanitiaDashboard, PanitiaLihatPeserta } from '../views';

const PanitiaRouter = () => {
  return (
    <Box
      display="flex"
      height="100vh"
      fontFamily="Open Sans"
      style={{ marginTop: '3em' }}
    >
      <DashboardAppBar title="Laman Panitia" logout back />
      <Switch>
        <Route path="/panitia" exact component={PanitiaDashboard} />
        <Route
          path="/panitia/lihat-peserta/:stateId"
          exact
          component={PanitiaLihatPeserta}
        />
      </Switch>
    </Box>
  );
};

export default PanitiaRouter;
