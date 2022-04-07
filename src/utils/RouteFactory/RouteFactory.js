import React from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import authToken from '../authToken';
import SuspenseLoader from '../../components/common/SuspenseLoader';

const filterRoutes = (routesList, role = 'guest') => {
  return routesList.filter(route => route.access.includes(role));
};

const RouteFactory = ({ config, routes }) => {
  const {
    user: { data },
  } = useSelector(state => state.auth);
  const filtered = filterRoutes(config, data.role);
  return (
    <Switch>
      {filtered.map(route => {
        let RouteComponent = routes[route.component];
        if (!route.access.includes('GUEST')) {
          if (!authToken.check()) {
            RouteComponent = () => <Redirect to="/" />;
          }
        }
        const module = (
          <React.Suspense fallback={<SuspenseLoader />}>
            <RouteComponent />
          </React.Suspense>
        );
        return (
          <Route exact={route.exact} key={route.path} path={route.path} render={() => module} />
        );
      })}
    </Switch>
  );
};

RouteFactory.propTypes = {
  config: propTypes.array.isRequired,
  routes: propTypes.object.isRequired,
};

export default RouteFactory;
