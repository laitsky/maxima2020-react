import React from 'react';
import { Route } from 'react-router-dom';
import {
  Beranda,
  DaftarMaba,
  HomeMainPage,
  LoginPage,
  MaxiTour,
  StateMainPage,
} from './views';
import HookForm from './views/testing/HookForm';
import Shortener from './views/shortener/Shortener';
import ShowName from './views/testing/ShowName';
import { AdminRouter } from './routers';

const AppRouter = () => (
  <div>
    <Route path="/" exact strict component={Beranda} />
    <Route path="/home" exact strict component={HomeMainPage} />
    <Route path="/state" exact strict component={StateMainPage} />
    <Route path="/tour" exact strict component={MaxiTour} />
    <Route path="/test" exact strict component={HookForm} />
    <Route path="/login" exact strict component={LoginPage} />
    <Route path="/daftar" exact strict component={DaftarMaba} />
    <Route path="/shortener" exact strict component={Shortener} />
    <Route path="/user/:name" exact strict component={ShowName} />
    <AdminRouter />
  </div>
);

export default AppRouter;
