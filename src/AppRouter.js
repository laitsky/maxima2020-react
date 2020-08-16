import React, { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import {
  Route,
  Switch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import {
  MxmNavbar,
  MxmFooter,
  AdminSidebar,
  AcaraSidebar,
  OrganisatorSidebar,
  StateBottomNav,
} from './components';
import {
  Beranda,
  MaxiTour,
  NotFound,
  JingleMaxima,
  Unauthorized401,
  Forbidden403,
  Shortener,
  SurveiState,
  SurveiManual,
} from './views';
import {
  AcaraRouter,
  AdminRouter,
  AuthRouter,
  HomeRouter,
  StateRouter,
  OrganisatorRouter,
} from './routers';
// eslint-disable-next-line no-unused-vars
import axiosMiddleware from './utils/middleware';

const AppRouter = () => {
  const location = useLocation();
  const history = useHistory();
  const token = window.sessionStorage.getItem('token');
  useEffect(() => {
    console.log('location changed!', location);
    if (token) {
      const { exp } = jwtDecode(token);
      const expirationTime = exp * 1000 - 60000;
      console.log(Date.now() >= expirationTime);
      if (Date.now() >= expirationTime) {
        window.sessionStorage.clear();
        history.push({
          pathname: '/login',
          data: {
            severity: 'error',
            message: 'Sesi kamu telah habis, silakan login kembali.',
          },
        });
      }
    }
  }, [location]);

  return (
    <Switch>
      <Route path="/401" exact component={Unauthorized401} />
      <Route path="/403" exact component={Forbidden403} />
      <Route path="/404" exact component={NotFound} />
      <Route path="/shortener" exact component={Shortener} />
      <Route path="/admin/:path1?/:path2?/:path3?" exact>
        <Switch>
          <AdminRouter Sidebar={AdminSidebar} />
        </Switch>
      </Route>
      <Route path="/acara/:path1?/:path2?/:path3?" exact>
        <Switch>
          <AcaraRouter Sidebar={AcaraSidebar} />
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
          <Route
            path="/jingle-maxima"
            exact
            component={JingleMaxima}
          />
          <Route path="/survei" exact component={SurveiState} />
          <Route path="/survei2" exact component={SurveiManual} />
          <Route path="/tour" exact component={MaxiTour} />
          <Route path="/" exact component={Beranda} />
          <AuthRouter />
        </Switch>
        <MxmFooter />
      </Route>
    </Switch>
  );
};

export default AppRouter;
