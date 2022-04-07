import React from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { removeConfirmationDialog } from '../../../ducks/confirmation/actions';

const ConfirmationDialog = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    data: { open = false, message, callback },
  } = useSelector(state => state.confirmation);

  const handlePrimaryClick = () => {
    callback(true);
    dispatch(removeConfirmationDialog());
  };
  const handleSecondaryClick = () => {
    callback(false);
    dispatch(removeConfirmationDialog());
  };
  return (
    <Dialog open={open} onClose={() => dispatch(removeConfirmationDialog())}>
      <div className="confirmation-root">
        <div className="confirmation-body">{message || ''}</div>
        <div className="d-flex justify-content-center confirmation-actions">
          <Button
            variant="contained"
            color="primary"
            className="theme-btn"
            onClick={handlePrimaryClick}
          >
            {t('text_yes')}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="theme-btn"
            onClick={handleSecondaryClick}
          >
            {t('text_no')}
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

ConfirmationDialog.propTypes = {
  data: propTypes.object,
  removeDialog: propTypes.func,
};

export default ConfirmationDialog;
