import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PanitiaDashboard, PanitiaLihatPeserta } from '../views';

const PanitiaRouter = () => {
  return (
    <Switch>
      <Route path="/panitia" exact component={PanitiaDashboard} />
      <Route
        path="/panitia/lihat-peserta/:stateId"
        exact
        component={PanitiaLihatPeserta}
      />
    </Switch>
  );
};

export default PanitiaRouter;
