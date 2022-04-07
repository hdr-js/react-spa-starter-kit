import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './ducks/store';
import { redirectToLogin } from './components/lib/Library';

import axiosInterceptor from './utils/axios';
import App from './App.js';
import './i18next.js';
import SuspenseLoader from './components/common/SuspenseLoader';

axiosInterceptor.run(redirectToLogin);

ReactDOM.render(
  <Suspense fallback={<SuspenseLoader />}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root'),
);
