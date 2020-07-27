import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AdminDashboard, AddHome } from '../views';
import ShortenerLists from '../views/dashboards/admin/Shortener';

const AdminRouter = () => (
  <>
    <Route path="/admin" exact>
      <Redirect to="/admin/dashboard" />
    </Route>
    <Route
      path="/admin/dashboard"
      exact
      strict
      component={AdminDashboard}
    />
    <Route
      path="/admin/add-home"
      exact
      strict
      component={AddHome}
    />
    <Route
      path="/admin/shorteners"
      exact
      strict
      component={ShortenerLists}
    />
  </>
);
export default AdminRouter;
