import React from 'react';
import propTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

const Email = ({ value }) => {
  return (
    <Tooltip title={value} placement="bottom-start" enterDelay={100}>
      <div>{value}</div>
    </Tooltip>
  );
};

Email.propTypes = {
  value: propTypes.string,
};

export default Email;
