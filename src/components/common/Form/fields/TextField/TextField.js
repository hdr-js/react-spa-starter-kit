import React from 'react';
import propTypes from 'prop-types';
import MUTextField from '@material-ui/core/TextField';

const TextField = ({ size, label, value, onChange, inValid, required, disabled, fixDisabled }) => {
  return (
    <div className="field-root">
      <MUTextField
        label={label}
        className={`form-control ${size}`}
        required={required}
        error={inValid}
        helperText={inValid ? `Please enter valid ${label}` : ' '}
        disabled={disabled || fixDisabled}
        value={value || ''}
        onChange={onChange}
        variant="outlined"
      />
    </div>
  );
};

TextField.propTypes = {
  label: propTypes.string,
  size: propTypes.string,
  value: propTypes.any,
  onChange: propTypes.func,
  title: propTypes.string,
  inValid: propTypes.bool,
  required: propTypes.bool,
  disabled: propTypes.bool,
  props: propTypes.object,
  fixDisabled: propTypes.bool,
};

export default TextField;
