import React from 'react';
import { Box, Container } from '@material-ui/core';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AcaraDashboard } from '../views';

const AcaraRouter = () => (
  <Box display="flex" height="100vh">
    <Container>
      <Switch>
        <Route path="/acara" exact>
          <Redirect to="acara/dashboard" />
        </Route>
        <Route
          path="/acara/dashboard"
          exact
          component={AcaraDashboard}
        />
      </Switch>
    </Container>
  </Box>
);

export default AcaraRouter;
