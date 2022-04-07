import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

import { promoStatus } from '../../../../utils/data/enumMap';

const PromoStatus = ({ value: { id, value, onChange } }) => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const { t } = useTranslation();
  const btnLabel = promoStatus[value].label;

  const handleButtonClick = event => {
    event.stopPropagation();
    setMenuAnchor(event.currentTarget);
  };

  const handleOptionClick = status => event => {
    event.stopPropagation();
    onChange({ id, status });
    setMenuAnchor(null);
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
        color="primary"
        className={`theme-btn status-drop-btn ${promoStatus[value].color}-btn`}
        onClick={handleButtonClick}
      >
        {t(btnLabel)}
        <ArrowDropDown />
      </Button>
      <Popover
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: getHorizontalAlignment('right'),
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: getHorizontalAlignment('right'),
        }}
        classes={{
          paper: 'popover-shadow',
        }}
      >
        <div className="drop-down-root">
          <List onClick={event => event.stopPropagation()}>
            <ListSubheader className="filter-subheader">{t('text_mark_promo_as')}</ListSubheader>
            {Object.values(promoStatus).map(item => (
              <ListItem button key={item.value} onClick={handleOptionClick(item.value)}>
                {t(item.label)}
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    </React.Fragment>
  );
};

PromoStatus.propTypes = {
  value: propTypes.object,
};

export default PromoStatus;
