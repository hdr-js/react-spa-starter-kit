import React from 'react';
import propTypes from 'prop-types';
import Field from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from 'react-i18next';

const SelectField = ({
  label,
  value,
  onChange,
  required,
  disabled,
  fixDisabled,
  options,
  error,
}) => {
  const { t } = useTranslation();
  return (
    <Field
      select
      fullWidth
      required={required}
      disabled={fixDisabled || disabled}
      label={t(label)}
      error={error}
      color="primary"
      variant="outlined"
      value={value || ''}
      onChange={onChange}
      rowsMax={4}
    >
      {options?.map(item => (
        <MenuItem key={item.value} value={item.value}>
          {t(item.label)}
        </MenuItem>
      ))}
    </Field>
  );
};

SelectField.propTypes = {
  label: propTypes.string,
  value: propTypes.any,
  onChange: propTypes.func,
  title: propTypes.string,
  inValid: propTypes.bool,
  error: propTypes.any,
  required: propTypes.bool,
  disabled: propTypes.bool,
  fixDisabled: propTypes.bool,
  props: propTypes.object,
  options: propTypes.array,
};

export default SelectField;
