import React from 'react';
import { Box, Container } from '@material-ui/core';
import { Route, Redirect, Switch } from 'react-router-dom';
import {
  AdminDashboard,
  AddHome,
  ShortenerLists,
  TambahAkun,
} from '../views';

const AdminRouter = ({ Sidebar }) => (
  <Box display="flex" height="100vh" fontFamily="Open Sans">
    <Sidebar />
    <Container>
      <Switch>
        <Route path="/admin" exact>
          <Redirect to="/admin/dashboard" />
        </Route>
        <Route
          path="/admin/dashboard"
          exact
          component={AdminDashboard}
        />
        <Route path="/admin/add-home" exact component={AddHome} />
        <Route
          path="/admin/tambah-akun"
          exact
          component={TambahAkun}
        />
        <Route
          path="/admin/shorteners"
          exact
          component={ShortenerLists}
        />
      </Switch>
    </Container>
  </Box>
);
export default AdminRouter;
