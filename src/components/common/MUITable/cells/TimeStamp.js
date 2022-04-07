import React from 'react';
import propTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

import { getTimeStamp } from '../../../../utils/time';

const TimeStamp = ({ value, variant, highlighted }) => {
  return (
    <Tooltip
      classes={{ tooltip: 'time-tool-tip' }}
      title={getTimeStamp(value, 'date-time')}
      enterDelay={100}
      placement="bottom-start"
    >
      <div className={`grey-text time ${highlighted ? 'red-value' : ''}`}>
        {value === null ? 'N/A' : getTimeStamp(value, variant)}
      </div>
    </Tooltip>
  );
};

TimeStamp.propTypes = {
  value: propTypes.number,
  variant: propTypes.string,
  highlighted: propTypes.bool,
};

export default TimeStamp;
