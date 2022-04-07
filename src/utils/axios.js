import qs from 'qs';
import axios from 'axios';
import { GET_LOGIN_TOKEN_URL } from '../configs/urlConstants';
import { storeTokenInLocalStorage, getTokenFromLocalStorage } from '../components/lib/Library';

export default {
  run: redirectToLogin => {
    const onErrorResponse = async err => {
      if (err && err.response && err.response.status === 401 && err.response.data.code === 4004) {
        const refreshToken = getTokenFromLocalStorage('refresh_token');

        const refreshTokenParams = {
          refresh_token: refreshToken,
          grant_type: 'refresh_token',
        };

        const response = await axios.post(GET_LOGIN_TOKEN_URL, qs.stringify(refreshTokenParams), {
          headers: {
            Authorization: 'Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        if (response && response.data) {
          storeTokenInLocalStorage(response.data);
          window.location.reload();
          return Promise.resolve(response.data);
        }
      } else if (
        (err.response.status === 401 && err.response.data.error === 'unauthorized') ||
        err.response.data.error_description === 'Bad credentials'
      ) {
        return err;
      } else if (err.response.status === 403 && err.response.data.error === 'access_denied') {
        redirectToLogin();
      } else if (err.response.status === 400 && err.response.data.error === 'invalid_grant') {
        redirectToLogin();
      } else if (
        err.response.status === 401 &&
        (err.response.data.code === 4002 || err.response.data.code === 4000)
      ) {
        redirectToLogin();
      }
      return Promise.reject(err.response);
    };

    axios.interceptors.response.use(response => {
      return response;
    }, onErrorResponse);
  },
};
