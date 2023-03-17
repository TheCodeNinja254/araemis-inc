import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const UnauthenticatedRouteWithLayout = ({
  layout: Layout,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

UnauthenticatedRouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired
};

export default UnauthenticatedRouteWithLayout;
