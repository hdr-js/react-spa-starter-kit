import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';

import { debounce } from '../../../utils/debounce';

const DebounceField = ({ value: outerValue, onUpdate }) => {
  const [fieldValue, setFieldValue] = useState(outerValue);

  const { t } = useTranslation();

  const handleChange = ({ target: { value } }) => {
    debounce(() => {
      onUpdate(value);
    }, 300);
    setFieldValue(value);
  };

  return (
    <Input
      value={fieldValue || outerValue}
      disableUnderline
      onChange={handleChange}
      className="search-field"
      placeholder={t('text_search_by_name')}
      startAdornment={
        <InputAdornment position="start">
          <Search className="search-icon" fontSize="small" />
        </InputAdornment>
      }
    />
  );
};

DebounceField.propTypes = {
  value: propTypes.string,
  onUpdate: propTypes.func,
};

export default DebounceField;
