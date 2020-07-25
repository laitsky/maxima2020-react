import React from 'react';
import { Route } from 'react-router-dom';
import Beranda from './pages/beranda/Beranda';
import Home from './pages/home/Home';
import State from './pages/state/State';
import Login from './pages/auth/Login';
import MaxiTour from './pages/maxitour/MaxiTour';
import HookForm from './pages/testing/HookForm';
import DaftarMaba from './pages/auth/DaftarMaba';
import Shortener from './pages/shortener/Shortener';

const AppRouter = () => (
  <div>
    <Route path="/" exact strict component={Beranda} />
    <Route path="/home" exact strict component={Home} />
    <Route path="/state" exact strict component={State} />
    <Route path="/tour" exact strict component={MaxiTour} />
    <Route path="/test" exact strict component={HookForm} />
    <Route path="/login" exact strict component={Login} />
    <Route path="/daftar" exact strict component={DaftarMaba} />
    <Route path="/shortener" exact strict component={Shortener} />
  </div>
);

export default AppRouter;
