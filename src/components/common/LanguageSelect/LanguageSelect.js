import React from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';

import { languageMap } from '../../../utils/data/enumMap';

const LanguageSelect = () => {
  const selected = localStorage.getItem('i18nextLng') || 'en';
  const { t } = useTranslation();

  const [menuAnchor, setMenuAnchor] = React.useState(null);
  React.useEffect(() => {
    document.body.dir = languageMap[selected].dir;
  }, [menuAnchor]);

  return (
    <div className="d-flex justify-content-end align-items-center language-select-root">
      <Button
        className="theme-btn text-capitalize"
        onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}
      >
        {languageMap[selected].label}
        <ArrowDropDown className="m-0" fontSize="small" />
      </Button>
      <Popover
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        classes={{
          paper: 'popover-shadow',
        }}
      >
        <div>
          <List>
            <ListSubheader>{t('text_select_language')}</ListSubheader>
            {Object.keys(languageMap)?.map(item => (
              <ListItem
                button
                key={item}
                onClick={() => {
                  i18next.changeLanguage(item);
                  setMenuAnchor(null);
                }}
              >
                {languageMap[item].label}
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    </div>
  );
};

LanguageSelect.propTypes = {
  selected: propTypes.string,
  onUpdate: propTypes.func,
};

export default withRouter(LanguageSelect);
