import React, { useState } from 'react';
import { Box, Container } from '@material-ui/core';
import { Route, Redirect, Switch } from 'react-router-dom';
import { DashboardAppBar } from '../components';
import {
  AcaraDashboard,
  AcaraEditState,
  AcaraStateDetail,
  AcaraStateLists,
  AcaraTambahState,
  AcaraAddHome,
  AcaraEditHome,
  AcaraHomeLists,
  AcaraAddHomeMedia,
  AcaraAkunOrganisatorLists,
} from '../views';

const AcaraRouter = ({ Sidebar }) => {
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
        title="Laman Acara"
      />
      <Sidebar
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
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
          <Route
            path="/acara/add-home"
            exact
            component={AcaraAddHome}
          />
          <Route
            path="/acara/add-home-media"
            exact
            component={AcaraAddHomeMedia}
          />
          <Route
            path="/acara/home-lists"
            exact
            component={AcaraHomeLists}
          />
          <Route
            path="/acara/edit-home/:homeId"
            exact
            component={AcaraEditHome}
          />
          <Route
            path="/acara/akun-organisator-lists"
            exact
            component={AcaraAkunOrganisatorLists}
          />
          <Route
            path="/acara/tambah-state"
            exact
            component={AcaraTambahState}
          />
          <Route
            path="/acara/state-lists"
            exact
            component={AcaraStateLists}
          />
          <Route
            path="/acara/edit-state/:stateId"
            exact
            component={AcaraEditState}
          />
          <Route
            path="/acara/state-detail/:stateId"
            exact
            component={AcaraStateDetail}
          />
        </Switch>
      </Container>
    </Box>
  );
};

export default AcaraRouter;
