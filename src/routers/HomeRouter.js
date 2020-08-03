import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomeMainPage, HomePuzzle, HomeLists } from '../views';

const HomeRouter = () => (
  <Switch>
    <Route path="/home" exact component={HomeMainPage} />
    <Route path="/home/puzzle" exact component={HomePuzzle} />
    <Route
      path="/home/organisator/:kategori"
      exact
      component={HomeLists}
    />
  </Switch>
);

export default HomeRouter;
