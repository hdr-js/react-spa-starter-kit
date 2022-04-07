import React from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';

import Tooltip from '@material-ui/core/Tooltip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import DashboardOutlined from '@material-ui/icons/DashboardOutlined';
import PersonOutlined from '@material-ui/icons/PersonOutlined';
import PeopleOutlined from '@material-ui/icons/PeopleOutlined';
import ShoppingBasketOutlined from '@material-ui/icons/ShoppingBasketOutlined';
import ViewCarouselOutlined from '@material-ui/icons/ViewCarouselOutlined';
import CategoryOutlined from '@material-ui/icons/CategoryOutlined';
import ListAlt from '@material-ui/icons/ListAlt';
import DnsOutlined from '@material-ui/icons/DnsOutlined';
import MapOutlined from '@material-ui/icons/MapOutlined';
import PersonPinOutlined from '@material-ui/icons/PersonPinOutlined';
import MonetizationOnOutlined from '@material-ui/icons/MonetizationOnOutlined';
import CardGiftcard from '@material-ui/icons/CardGiftcard';
import StarBorder from '@material-ui/icons/StarBorder';
import WidgetsOutlined from '@material-ui/icons/WidgetsOutlined';
import FolderSpecialOutlined from '@material-ui/icons/FolderSpecialOutlined';
import StoreOutlined from '@material-ui/icons/StoreOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ShopTwoOutlined from '@material-ui/icons/ShopTwoOutlined';
import SentimentSatisfiedAltOutlined from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import DynamicFeedOutlined from '@material-ui/icons/DynamicFeedOutlined';
import Undo from '@material-ui/icons/Undo';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import Brightness2Outlined from '@material-ui/icons/Brightness2Outlined';
import StarsOutlined from '@material-ui/icons/StarsOutlined';
import DeviceHubOutlined from '@material-ui/icons/DeviceHubOutlined';
import SupervisedUserCircleOutlined from '@material-ui/icons/SupervisedUserCircleOutlined';
import DomainOutlined from '@material-ui/icons/DomainOutlined';

import logoImage from '../../../assets/img/react-logo.png';
import queries from '../../../utils/data/queries';
import './drawer.scss';

const icons = {
  DashboardOutlined,
  PersonOutlined,
  PeopleOutlined,
  ShoppingBasketOutlined,
  ViewCarouselOutlined,
  CategoryOutlined,
  ListAlt,
  DnsOutlined,
  MapOutlined,
  PersonPinOutlined,
  MonetizationOnOutlined,
  StarBorder,
  CardGiftcard,
  WidgetsOutlined,
  FolderSpecialOutlined,
  StoreOutlined,
  SettingsOutlinedIcon,
  ShopTwoOutlined,
  SentimentSatisfiedAltOutlined,
  DynamicFeedOutlined,
  Undo,
  ScheduleOutlinedIcon,
  Brightness2Outlined,
  StarsOutlined,
  DeviceHubOutlined,
  SupervisedUserCircleOutlined,
  DomainOutlined,
};

const Drawer = ({ location, history: { listen, push }, navigationList, role, collapsed }) => {
  const [selectedRoute, setSelectedRoute] = React.useState(location.pathname.split('/')[1]);
  const [opened, setOpened] = React.useState([]);

  const { t } = useTranslation();

  React.useEffect(() => {
    const unSubListen = listen(({ pathname }) => {
      setSelectedRoute(pathname.split('/')[1]);
    });
    return () => {
      unSubListen();
    };
  });

  const getExpandIcon = item => {
    if (item?.children?.length) {
      if (opened.includes(item?.paths[0])) {
        return <ExpandLess className="expansion-icon" fontSize="small" />;
      }
      return <ExpandMore className="expansion-icon" fontSize="small" />;
    }
    return null;
  };

  return (
    <div className={`drawer-root ${collapsed ? 'compact' : ''}`}>
      <div className="logo-container">
        <img src={logoImage} alt="" className="logo-image" />
      </div>
      <div className="nav-list">
        <List>
          {navigationList
            .filter(item => item.access.includes(role))
            .map(item => {
              const Icon = icons[item.icon];
              return (
                <React.Fragment>
                  <Tooltip key={item.paths[0]} placement="right" title={t(item.label)}>
                    <ListItem
                      disableGutters
                      button
                      className={`d-flex justify-content-between ${
                        item.paths.includes(selectedRoute) ? 'selected-list-item' : 'list-item'
                      }`}
                      onClick={() => {
                        if (item?.children?.length) {
                          let updated = [];
                          if (!opened?.includes(item?.paths[0])) {
                            updated = [...opened, item?.paths[0]];
                          } else {
                            updated = opened.filter(pathValue => pathValue !== item?.paths[0]);
                          }
                          setOpened(updated);
                        } else {
                          push(
                            `/${item.paths[0]}?${item.queried ? queries[item.paths[0]].query : ''}`,
                          );
                        }
                      }}
                    >
                      <div>
                        <Icon className="nav-icon" />
                        <span className="nav-text">{t(item.label)}</span>
                      </div>
                      {getExpandIcon(item)}
                    </ListItem>
                  </Tooltip>
                  <Collapse in={opened?.includes(item?.paths[0])} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item?.children
                        ?.filter(childItem => childItem.access.includes(role))
                        .map(childItem => {
                          const ChildIcon = icons[childItem.icon];
                          return (
                            <Tooltip
                              key={childItem.paths[0]}
                              placement="right"
                              title={t(childItem.label)}
                            >
                              <ListItem
                                disableGutters
                                button
                                className={`nested-item ${
                                  childItem.paths.includes(selectedRoute)
                                    ? 'selected-list-item'
                                    : 'list-item'
                                }`}
                                onClick={() => {
                                  push(
                                    `/${childItem.paths[0]}?${
                                      childItem.queried ? queries[childItem.paths[0]].query : ''
                                    }`,
                                  );
                                }}
                              >
                                <ChildIcon className="nav-icon" />
                                <span className="nav-text">{t(childItem.label)}</span>
                              </ListItem>
                            </Tooltip>
                          );
                        })}
                    </List>
                  </Collapse>
                </React.Fragment>
              );
            })}
        </List>
      </div>
    </div>
  );
};

Drawer.propTypes = {
  location: propTypes.any,
  history: propTypes.any,
  navigationList: propTypes.array,
  role: propTypes.string,
  collapsed: propTypes.bool,
};

export default withRouter(Drawer);
