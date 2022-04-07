import React from 'react';
import propTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

const Text = ({ value, variant, highlighted, striked }) => {
  return (
    <Tooltip
      classes={{
        tooltip: 'capitalize',
      }}
      title={value || ''}
      placement="bottom-start"
      enterDelay={100}
    >
      <div
        className={`text-root ${variant}
        ${value === 'N/A' ? 'null-value' : ''}
        ${highlighted ? 'red-value' : ''}
        ${striked ? 'striked-value' : ''}`}
      >
        {value}
      </div>
    </Tooltip>
  );
};

Text.propTypes = {
  value: propTypes.any,
  variant: propTypes.string,
  highlighted: propTypes.bool,
  striked: propTypes.bool,
};

export default Text;
