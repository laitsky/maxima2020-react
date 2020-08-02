import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  MxmNavbar,
  AdminSidebar,
  OrganisatorSidebar,
  StateBottomNav,
} from './components';
import { Beranda, HomeMainPage, MaxiTour, NotFound } from './views';
import ShowName from './views/testing/ShowName';
import {
  AcaraRouter,
  AdminRouter,
  AuthRouter,
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
    <Route path="/acara/:path1?:/:path2?/:path3?" exact>
      <Switch>
        <AcaraRouter />
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
        <Route path="/" exact component={Beranda} />
        <Route path="/home" exact component={HomeMainPage} />
        <AuthRouter />
      </Switch>
    </Route>
  </Switch>
);

export default AppRouter;
