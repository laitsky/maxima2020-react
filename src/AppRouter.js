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
  CustomShortener,
  AboutUs,
  FAQ,
  VirtualBG,
} from './views';
import {
  AcaraRouter,
  AdminRouter,
  AuthRouter,
  HomeRouter,
  StateRouter,
  OrganisatorRouter,
  PanitiaRouter,
} from './routers';
// eslint-disable-next-line no-unused-vars
import axiosMiddleware from './utils/middleware';

const AppRouter = () => {
  const location = useLocation();
  const { pathname } = useLocation();
  const history = useHistory();
  const token = window.sessionStorage.getItem('token');

  useEffect(() => {
    if (token) {
      const { exp } = jwtDecode(token);
      const expirationTime = exp * 1000 - 60000;
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Switch>
      <Route path="/401" exact component={Unauthorized401} />
      <Route path="/403" exact component={Forbidden403} />
      <Route path="/404" exact component={NotFound} />
      <Route path="/shortener" exact component={Shortener} />
      <Route
        path="/custom-shortener"
        exact
        component={CustomShortener}
      />
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
      <Route path="/panitia/:path1?/:path2?" exact>
        <Switch>
          <PanitiaRouter />
        </Switch>
      </Route>
      <Route path="/organisator/:path1?/:path2?" exact>
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
          <Route path="/virtual-bg" exact component={VirtualBG} />
          <Route path="/tour" exact component={MaxiTour} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/faq" exact component={FAQ} />
          <Route path="/" exact component={Beranda} />
          <AuthRouter />
        </Switch>
        <MxmFooter />
      </Route>
    </Switch>
  );
};

export default AppRouter;
