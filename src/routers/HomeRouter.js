import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  HomeMainPage,
  HomePuzzle,
  HomeLists,
  HomeDetail,
  Antanaklasi,
  HomeFinalPage,
} from '../views';

const HomeRouter = () => (
  <Switch>
    <Route path="/home" exact component={HomeMainPage} />
    <Route path="/home/puzzle" exact component={HomePuzzle} />
    <Route
      path="/home/organisator/:kategori"
      exact
      component={HomeLists}
    />
    <Route
      path="/home/detail-organisator/:organisator"
      exact
      component={HomeDetail}
    />
    <Route
      path="/home/antanaklasi/:organisator"
      exact
      component={Antanaklasi}
    />
    <Route
      path="/home/twibbon/:organisator"
      exact
      component={HomeFinalPage}
    />
  </Switch>
);

export default HomeRouter;
