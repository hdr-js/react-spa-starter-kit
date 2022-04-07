import React from 'react';
import propTypes from 'prop-types';

const UploadControl = ({ children, onChange, disabled, accept }) => {
  return (
    <label htmlFor="contained-button-file" className="m-0 w-100 upload-label">
      <input
        accept={accept}
        disabled={disabled}
        style={{ display: 'none' }}
        id="contained-button-file"
        multiple
        type="file"
        onChange={disabled ? () => {} : onChange}
      />
      {children}
    </label>
  );
};

UploadControl.propTypes = {
  onChange: propTypes.func.isRequired,
  children: propTypes.any,
  accept: propTypes.string,
  disabled: propTypes.bool,
};

export default UploadControl;
