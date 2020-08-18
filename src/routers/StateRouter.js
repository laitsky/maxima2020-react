/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  StateMainPage,
  DaftarState,
  StateOrgDetail,
  RegisteredStateDetail,
  ProfileMaba,
  Linimasa,
  StateInfo,
  SurveiFrame,
} from '../views';

const StateRouter = () => (
  <Switch>
    <Route path="/state" exact component={StateMainPage} />

    {/* membuat 4 route /state/daftar/day(N), N = [1, 4] */}
    {[...Array(4)].map((e, i) => (
      <Route
        path={`/state/daftar/day${i + 1}`}
        exact
        render={(props) => <DaftarState {...props} day={i + 1} />}
      />
    ))}

    {/* membuat 4 route /state/detail-registrasi/day(N), N = [1, 4] */}
    {[...Array(4)].map((e, i) => (
      <Route
        path={`/state/detail-registrasi/day${i + 1}`}
        exact
        render={(props) => (
          <RegisteredStateDetail {...props} day={i + 1} />
        )}
      />
    ))}

    {/* membuat 4 route /state/survei/day(N), N = [1, 4] */}
    {[...Array(4)].map((e, i) => (
      <Route
        path={`/state/survei/day${i + 1}`}
        exact
        render={(props) => <SurveiFrame {...props} day={i + 1} />}
      />
    ))}

    <Route
      path="/state/detail-organisator/:organisator"
      exact
      component={StateOrgDetail}
    />

    <Route path="/state/profil" exact component={ProfileMaba} />
    <Route path="/state/linimasa" exact component={Linimasa} />
    <Route path="/state/info" exact component={StateInfo} />
  </Switch>
);

export default StateRouter;
