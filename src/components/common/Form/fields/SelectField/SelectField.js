import React from 'react';
import propTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from 'react-i18next';
import selectValues from '../../../../../utils/data/selectValues';

const SelectField = ({
  size,
  label,
  value,
  onChange,
  inValid,
  required,
  disabled,
  optionSet,
  fixDisabled,
}) => {
  const { t } = useTranslation();
  return (
    <div className="field-root">
      <TextField
        select
        label={label}
        className={`form-control ${size}`}
        required={required}
        error={inValid}
        helperText={inValid ? `Please enter valid ${label}` : ' '}
        disabled={disabled || fixDisabled}
        value={value || ''}
        onChange={onChange}
        variant="outlined"
      >
        {selectValues[optionSet].map(option => (
          <MenuItem key={option.value} value={option.value}>
            {t(option.label)}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

SelectField.propTypes = {
  label: propTypes.string,
  size: propTypes.string,
  value: propTypes.any,
  onChange: propTypes.func,
  title: propTypes.string,
  inValid: propTypes.bool,
  required: propTypes.bool,
  disabled: propTypes.bool,
  optionSet: propTypes.string,
  fixDisabled: propTypes.bool,
};

export default SelectField;
