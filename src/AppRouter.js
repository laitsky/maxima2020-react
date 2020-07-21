import React from 'react';
import { Route } from 'react-router-dom';
import Beranda from './pages/beranda/Beranda';
import Home from './pages/home/Home';
import State from './pages/state/State';
import Login from './pages/auth/Login';
import VirtualTour from './pages/testing/VirtualTour';

const AppRouter = () => (
  <div>
    <Route path="/" exact strict component={Beranda} />
    <Route path="/home" exact strict component={Home} />
    <Route path="/state" exact strict component={State} />
    <Route path="/tour" exact strict component={VirtualTour} />
    <Route path="/login" exact strict component={Login} />
  </div>
);

export default AppRouter;
