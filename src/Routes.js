import React from 'react';
import { Switch } from 'react-router-dom';
import Loadable from './components/Loadable';
import UnauthenticatedRouteWithLayout from './components/RoutesLayout';
import HomeLayout from './Layouts/HomeLayout';

const HomeView = Loadable(() =>
  import(/* webpackChunkName: "HomeView" */ './views/Home')
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
    </Switch>
  );
};

export default Routes;
