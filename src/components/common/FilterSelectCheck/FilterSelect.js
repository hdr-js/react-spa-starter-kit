import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FilterList from '@material-ui/icons/FilterList';
import Checkbox from '@material-ui/core/Checkbox';
import Popover from '@material-ui/core/Popover';

import filtersConfig from '../../../utils/data/filters';

const FilterSelect = ({ variant, onUpdate, values, allValues }) => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [filters, setFilter] = useState({ ...values });
  const { t } = useTranslation();
  useEffect(() => {
    setFilter({ ...values });
  }, [values]);

  const handleFilterChange = (name, key) => () => {
    if (key === 'ALL') {
      if (filters?.status?.length === allValues?.length) {
        setFilter({ status: [] });
      } else {
        setFilter({ status: [...allValues] });
      }
    } else {
      setFilter({
        ...filters,
        [name]: !filters[name].includes(key)
          ? [...filters[name], key]
          : filters[name].filter(item => item !== key),
      });
    }
  };

  const handleFilterCancel = () => {
    setMenuAnchor(null);
    setFilter(values);
  };

  const handleFilterApply = () => {
    setMenuAnchor(null);
    onUpdate(filters);
  };

  const getHorizontalAlignment = given => {
    const selectedLang = localStorage.getItem('i18nextLng') || 'en';
    if (selectedLang === 'ar') {
      if (given === 'left') {
        return 'right';
      }
      return 'left';
    }
    return given || 'left';
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        className="filter-btn"
        onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}
      >
        <FilterList className="filter-icon" fontSize="small" />
        {t('text_filter')}
      </Button>
      <Popover
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={handleFilterCancel}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: getHorizontalAlignment('left'),
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: getHorizontalAlignment('left'),
        }}
        classes={{
          paper: 'popover-shadow',
        }}
      >
        <div className="drop-down-root">
          <div className="filter-list">
            {filtersConfig[variant].map(item => (
              <FormControl key={item.name}>
                <FormLabel className="filter-subheader" disabled>
                  {t(item.subheader)}
                </FormLabel>
                <FormControlLabel
                  key="ALL"
                  className="filter-option"
                  value="ALL"
                  control={
                    <Checkbox
                      color="primary"
                      onChange={handleFilterChange(item.name, 'ALL')}
                      checked={filters[item.name].length === allValues.length}
                    />
                  }
                  label={t('text_all')}
                />
                {item.options.map(option => (
                  <FormControlLabel
                    key={option.value}
                    className="filter-option"
                    value={option.value}
                    control={
                      <Checkbox
                        color="primary"
                        onChange={handleFilterChange(item.name, option.value)}
                        checked={filters[item.name].includes(option.value)}
                      />
                    }
                    label={t(option.label)}
                  />
                ))}
              </FormControl>
            ))}
          </div>
          <div className="filter-actions-root">
            <Button className="filter-action-btn first-btn" onClick={handleFilterCancel}>
              {t('text_cancel')}
            </Button>
            <Button
              color="primary"
              className="filter-action-btn last-btn"
              onClick={handleFilterApply}
            >
              {t('text_apply')}
            </Button>
          </div>
        </div>
      </Popover>
    </React.Fragment>
  );
};

FilterSelect.propTypes = {
  variant: propTypes.string,
  onUpdate: propTypes.func,
  values: propTypes.any,
  allValues: propTypes.array,
};

export default FilterSelect;
