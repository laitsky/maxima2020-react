import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  MxmNavbar,
  AdminSidebar,
  OrganisatorSidebar,
  StateBottomNav,
} from './components';
import { Beranda, MaxiTour, NotFound, JingleMaxima } from './views';
import ShowName from './views/testing/ShowName';
import {
  AcaraRouter,
  AdminRouter,
  AuthRouter,
  HomeRouter,
  StateRouter,
  OrganisatorRouter,
} from './routers';

const AppRouter = () => (
  <Switch>
    <Route path="/404" exact component={NotFound} />
    <Route path="/admin/:path1?/:path2?/:path3?" exact>
      <Switch>
        <AdminRouter Sidebar={AdminSidebar} />
      </Switch>
    </Route>
    <Route path="/acara/:path1?/:path2?/:path3?" exact>
      <Switch>
        <AcaraRouter />
      </Switch>
    </Route>
    <Route path="/home/:path1?/:path2?/:path3?" exact>
      <MxmNavbar />
      <Switch>
        <HomeRouter />
      </Switch>
    </Route>
    <Route path="/state/:path1?/:path2?/:path3?" exact>
      <MxmNavbar />
      <Switch>
        <StateRouter />
      </Switch>
      <StateBottomNav />
    </Route>
    <Route path="/organisator/:path?" exact>
      <Switch>
        <OrganisatorRouter Sidebar={OrganisatorSidebar} />
      </Switch>
    </Route>
    <Route>
      <MxmNavbar />
      <Switch>
        <Route path="/jingle-maxima" exact component={JingleMaxima} />
        <Route path="/tour" exact component={MaxiTour} />
        <Route path="/" exact component={Beranda} />
        <AuthRouter />
      </Switch>
    </Route>
  </Switch>
);

export default AppRouter;
