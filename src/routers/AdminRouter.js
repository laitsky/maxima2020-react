import React, { useState } from 'react';
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';
import { Route, Redirect, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {
  AdminDashboard,
  AddHome,
  AddHomeMedia,
  ShortenerLists,
  TambahAkun,
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
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => handleToggleSidebar()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Laman Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
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
