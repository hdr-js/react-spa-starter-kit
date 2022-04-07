import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';

import AppBar from '../common/ApplicationBar';
import Drawer from '../common/Drawer';
import ConfirmationDialog from '../common/ConfirmationDialog';
import authToken from '../../utils/authToken';
import navigationConfig from '../../utils/data/navigationConfig';
import routesDictionary from '../../routes/dictionary.json';
// import Notification from '../common/Notification';
import './layout.scss';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const { user } = useSelector(state => state.auth);
  const [collapsed, setCollapsed] = React.useState(false);
  const found = !!routesDictionary
    .filter(route => route.access.includes(user.data.role))
    .find(route => `/${route.path.split('/')[1]}` === `/${pathname.split('/')[1]}`);
  if (found) {
    return (
      <React.Fragment>
        <div className="d-flex layout-root">
          {authToken.check() ? (
            <React.Fragment>
              <Drawer
                collapsed={collapsed}
                role={user.data.role}
                navigationList={navigationConfig}
              />
              <div className="main-section">
                <AppBar collapsed={collapsed} onToggle={setCollapsed} userName={user.data.name} />
                <div className="route-root">
                  <div className="grid-container">{children}</div>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="route-root">{children}</div>
            </React.Fragment>
          )}
        </div>
        {/* <Notification /> */}
        <ConfirmationDialog />
      </React.Fragment>
    );
  }
  return <Redirect to="/page-not-found" />;
};

Layout.propTypes = {
  children: propTypes.any,
};

export default Layout;
