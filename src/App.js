import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MomentUtils from '@date-io/moment';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { SnackbarProvider } from 'notistack';

import RouteComponents from './routes/modules';
import routesConfig from './routes/dictionary.json';
import RouteFactory from './utils/RouteFactory';

import Layout from './components/Layout';
import './styles/globals.scss';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Din LT Next", sans-serif',
  },
  palette: {
    primary: {
      main: '#0D1117',
    },
    secondary: {
      main: '#F5A623',
    },
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <SnackbarProvider>
          <BrowserRouter>
            <Layout>
              <RouteFactory routes={RouteComponents} config={routesConfig} />
            </Layout>
          </BrowserRouter>
        </SnackbarProvider>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
};

export default App;
