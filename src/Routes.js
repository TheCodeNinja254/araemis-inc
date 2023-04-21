import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from './components/Loadable';
import UnauthenticatedRouteWithLayout from './components/RoutesLayout';
import HomeLayout from './Layouts/HomeLayout';

const HomeView = Loadable(() =>
  import(/* webpackChunkName: "HomeView" */ './views/Home')
);
const NotFound = Loadable(() =>
  import(/* webpackChunkName: "NotFound" */ './views/NotFound')
);

const Routes = () => {
  return (
    <Switch>
      <UnauthenticatedRouteWithLayout
        component={HomeView}
        exact
        layout={HomeLayout}
        titleLayout=""
        path="/"
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
