import React from 'react';
import { Route } from 'react-router-dom';
import {
  Beranda,
  DaftarMaba,
  HomeMainPage,
  LoginPage,
  MaxiTour,
} from './views';
import HookForm from './views/testing/HookForm';
import Shortener from './views/shortener/Shortener';
import ShowName from './views/testing/ShowName';
import {
  AdminRouter,
  StateRouter,
  OrganisatorRouter,
} from './routers';

const AppRouter = () => (
  <div>
    <Route path="/" exact strict component={Beranda} />
    <Route path="/home" exact strict component={HomeMainPage} />
    <Route path="/tour" exact strict component={MaxiTour} />
    <Route path="/test" exact strict component={HookForm} />
    <Route path="/login" exact strict component={LoginPage} />
    <Route
      path="/logout"
      exact
      strict
      render={() => {
        window.sessionStorage.clear();
        window.location = '/';
      }}
    />
    <Route path="/daftar" exact strict component={DaftarMaba} />
    <Route path="/shortener" exact strict component={Shortener} />
    <Route path="/user/:name" exact strict component={ShowName} />
    <AdminRouter />
    <StateRouter />
    <OrganisatorRouter />
  </div>
);

export default AppRouter;
