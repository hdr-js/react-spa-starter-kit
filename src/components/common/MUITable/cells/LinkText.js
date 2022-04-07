import React from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

const Text = ({ value: { label, onClick } }) => {
  const { t } = useTranslation();
  return (
    <Tooltip
      classes={{
        tooltip: 'capitalize',
      }}
      title={t(label) || ''}
      placement="bottom-start"
      enterDelay={100}
    >
      <Button
        color="primary"
        className="theme-btn"
        onClick={event => {
          event.stopPropagation();
          onClick();
        }}
      >
        {t(label)}
      </Button>
    </Tooltip>
  );
};

Text.propTypes = {
  value: propTypes.object,
};

export default Text;
