import React, { useState } from 'react';
import { Box, Container } from '@material-ui/core';
import { Route, Redirect, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { DashboardAppBar } from '../components';
import {
  AdminDashboard,
  AddHome,
  AddHomeMedia,
  ShortenerLists,
  TambahAkun,
  TambahState,
  StateLists,
} from '../views';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const AdminRouter = ({ Sidebar }) => {
  const classes = useStyles();
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = () => {
    setToggled((prevState) => !prevState);
  };
  return (
    <Box
      display="flex"
      height="100vh"
      fontFamily="Open Sans"
      style={{ marginTop: '3em' }}
    >
      <DashboardAppBar
        handleToggleSidebar={handleToggleSidebar}
        title="Laman Admin"
      />
      <Sidebar toggled={toggled} />
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
            path="/admin/add-home-media"
            exact
            component={AddHomeMedia}
          />
          <Route
            path="/admin/tambah-akun"
            exact
            component={TambahAkun}
          />
          <Route
            path="/admin/tambah-state"
            exact
            component={TambahState}
          />
          <Route
            path="/admin/state-lists"
            exact
            component={StateLists}
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
};
export default AdminRouter;
