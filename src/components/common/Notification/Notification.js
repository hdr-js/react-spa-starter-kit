/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { withSnackbar } from 'notistack';
import IconButton from '@material-ui/core/IconButton';
import Cancel from '@material-ui/icons/Cancel';

class Notification extends Component {
  displayed = [];

  componentDidUpdate() {
    const { enqueueSnackbar, closeSnackbar, notifications = [] } = this.props;

    notifications.forEach(({ key, message, options = {} }) => {
      if (this.displayed.includes(key)) return;
      enqueueSnackbar(message, {
        key,
        ...options,
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
        onClose: (event, reason, closeKey) => {
          if (options.onClose) {
            options.onClose(closeKey);
            this.removeExited(closeKey);
          }
        },
        action: snackBarKey => (
          <IconButton onClick={() => closeSnackbar(snackBarKey)}>
            <Cancel style={{ color: '#fff' }} className="snackbar-cancel-btn" />
          </IconButton>
        ),
      });
      this.storeDisplayed(key);
    });
  }

  storeDisplayed = id => {
    this.displayed = [...this.displayed, id];
  };

  removeExited = key => {
    this.displayed = this.displayed.filter(item => item !== key);
  };

  render() {
    return null;
  }
}

export default withSnackbar(Notification);
