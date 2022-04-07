/* eslint-disable no-restricted-syntax */
/* eslint-disable no-useless-escape */
/* eslint-disable max-len */

import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

import logoAsset from '../../../assets/img/react-logo.png';
import LanguageSelect from '../../../components/common/LanguageSelect';
import { authLogin } from '../../../ducks/auth/actions';

import './login.scss';

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { isLoggedIn, user } = useSelector(state => state.auth);

  const [fieldErrors, setFieldErrors] = React.useState({
    email: '',
    password: '',
  });

  const isEmailValid = value => {
    const expression = /^\s*(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/;
    return expression.test(String(value).toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    const loginPayload = {};

    // eslint-disable-next-line no-unused-vars
    for (const entry of new FormData(event.target).entries()) {
      const itr0 = entry[0];
      const itr1 = entry[1];
      loginPayload[itr0] = itr1;
    }

    const isEmailEmpty = loginPayload.email === '';
    const isPasswordEmpty = loginPayload.password === '';

    const isEmailInvalid = !isEmailValid(loginPayload.email);

    if (!isEmailEmpty && !isPasswordEmpty && !isEmailInvalid) {
      dispatch(
        authLogin({
          email: loginPayload.email,
          password: loginPayload.password,
        }),
      );
    }
    setFieldErrors({
      email: (() => {
        if (isEmailEmpty) {
          return t('text_email_required');
        }
        if (isEmailInvalid) {
          return t('text_email_invalid');
        }
        return '';
      })(),
      password: isPasswordEmpty ? t('text_password_required') : '',
    });
  };

  if (isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: '/dashboard',
        }}
      />
    );
  }

  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <div className="d-flex login-container">
        <div className="d-flex flex-column justify-content-center login-form">
          {user.isLoading && <LinearProgress color="secondary" className="login-loader" />}
          <div className="login-footer">
            <div className="d-flex justify-content-between align-items-center">
              <span className="app-copyright-text">
                <span className="copyright-icon">©</span>
                {` ${moment().format('YYYY')} ${t('text_mini_mart')}. ${t(
                  'text_all_rights_reserved',
                )}`}
              </span>
              <span className="application-version">v{WEB_PORTAL_VERSION}</span>
            </div>
          </div>
          <div className="login-header">
            <div className="d-flex justify-content-between align-items-center logo-title">
              <img className="logo-min" src={logoAsset} alt="mun-logo" />
              <LanguageSelect selected="en" />
            </div>
            <div className="login-title">{t('text_sign_in')}</div>
          </div>
          <form className="d-flex flex-column form-root" onSubmit={handleSubmit}>
            <TextField
              error={fieldErrors.email !== ''}
              label={fieldErrors.email !== '' ? fieldErrors.email : t('text_email_address')}
              disabled={user.isLoading}
              name="email"
              color="primary"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                classes: {
                  root: 'login-field-root',
                  input: 'field',
                },
              }}
              variant="outlined"
            />
            <TextField
              error={fieldErrors.password !== ''}
              label={fieldErrors.password !== '' ? fieldErrors.password : t('text_password')}
              disabled={user.isLoading}
              name="password"
              type="password"
              color="primary"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                classes: {
                  root: 'login-field-root',
                  input: 'field',
                },
              }}
              variant="outlined"
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={user.isLoading}
              className="login-button"
            >
              {t('text_sign_in')}
            </Button>
            <span className="error-text">{user.error.message}</span>
          </form>
        </div>
        <div className="d-none d-lg-block login-banner" />
      </div>
    </div>
  );
};

Login.propTypes = {
  isLoading: propTypes.bool,
  loginTokenRequest: propTypes.func,
  totalValue: propTypes.string,
  apiError: propTypes.object,
};

export default Login;
