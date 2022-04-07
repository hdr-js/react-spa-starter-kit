import React from 'react';
import propTypes from 'prop-types';
import Field from '@material-ui/core/TextField';
import { useTranslation } from 'react-i18next';

const TextField = ({
  label,
  value,
  onChange,
  required,
  disabled,
  fixDisabled,
  margin,
  error,
  classes,
}) => {
  const { t } = useTranslation();
  return (
    <Field
      fullWidth
      required={required}
      disabled={fixDisabled || disabled}
      label={t(label)}
      margin={margin}
      error={error}
      color="primary"
      variant="outlined"
      value={value || ''}
      onChange={onChange}
      className={classes}
    />
  );
};

TextField.propTypes = {
  label: propTypes.string,
  margin: propTypes.string,
  value: propTypes.any,
  error: propTypes.any,
  classes: propTypes.any,
  onChange: propTypes.func,
  title: propTypes.string,
  inValid: propTypes.bool,
  required: propTypes.bool,
  disabled: propTypes.bool,
  fixDisabled: propTypes.bool,
  props: propTypes.object,
};

export default TextField;
