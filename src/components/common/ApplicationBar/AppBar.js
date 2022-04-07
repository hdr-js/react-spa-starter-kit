import React from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Tooltip from '@material-ui/core/Tooltip';
import ExitToApp from '@material-ui/icons/ExitToApp';
import FormatIndentDecrease from '@material-ui/icons/FormatIndentDecrease';
import IconButton from '@material-ui/core/IconButton';
import LanguageSelect from '../LanguageSelect';
import { authLogout } from '../../../ducks/auth/actions';
import { askConfirmation } from '../../../ducks/confirmation/actions';

const AppBar = ({ collapsed, onToggle }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-between bg-white nav-root">
      <div className="my-auto d-flex actions-container">
        <IconButton className="circular-btn" onClick={() => onToggle(!collapsed)}>
          <FormatIndentDecrease
            className={collapsed ? 'side-bar-exp' : 'side-bar-col'}
            fontSize="small"
          />
        </IconButton>
      </div>
      <div className="d-flex justify-content-end align-items-center actions-container">
        <LanguageSelect selected="en" />
        <Tooltip placement="bottom" title={t('text_logout')}>
          <IconButton
            className="circular-btn"
            onClick={() => {
              dispatch(
                askConfirmation({
                  message: t('text_you_sure_you_want_logout'),
                  callback: response => {
                    if (response) {
                      history.push('/');
                      dispatch(authLogout());
                      localStorage.clear();
                    }
                  },
                }),
              );
            }}
          >
            <ExitToApp fontSize="small" />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

AppBar.propTypes = {
  onLogout: propTypes.func,
  history: propTypes.any,
  collapsed: propTypes.bool,
  onToggle: propTypes.func,
  askConfirmation: propTypes.func,
};

export default AppBar;
