import React from 'react';
import propTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

// const formatPhoneNumber = phoneNumberString => {
//   const match = phoneNumberString.match(/(\d{3})(\d{2})(\d{3})(\d{4})$/);
//   if (match) {
//     return ['+', match[1], ' (', match[2], ') ', match[3], '-', match[4]].join('');
//   }
//   return phoneNumberString;
// };

const Phone = ({ value }) => {
  return (
    <Tooltip title={value || ''} placement="bottom-start" enterDelay={100}>
      <div className={`text-root ${value === 'N/A' ? 'null-value' : ''}`}>{value || ''}</div>
    </Tooltip>
  );
};

Phone.propTypes = {
  value: propTypes.any,
};

export default Phone;
