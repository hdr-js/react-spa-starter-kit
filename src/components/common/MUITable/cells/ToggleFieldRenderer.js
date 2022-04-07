import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Tooltip from '@material-ui/core/Tooltip';
import Switch from '@material-ui/core/Switch';
import { useDispatch } from 'react-redux';
import { askConfirmation } from '../../../../ducks/confirmation/actions';

const ToggleFieldRenderer = ({
  value: { value, onChange, disabled, confirmations },
  onToolTip,
  offToolTip,
  align,
}) => {
  const [checked, setChecked] = useState(value);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleChange = event => {
    event.stopPropagation();
    dispatch(
      askConfirmation({
        message: checked ? confirmations[0] : confirmations[1],
        callback: response => {
          if (response) {
            onChange(!checked);
            setChecked(!checked);
          } else {
            setChecked(checked);
          }
        },
      }),
    );
  };

  return (
    <Tooltip
      title={checked ? t(onToolTip) : t(offToolTip)}
      placement="bottom-start"
      enterDelay={100}
    >
      <div className={`toggle-root toggle-${align}`}>
        <Switch
          disabled={disabled}
          color="primary"
          checked={checked}
          onClick={disabled ? () => null : handleChange}
        />
      </div>
    </Tooltip>
  );
};

ToggleFieldRenderer.propTypes = {
  value: propTypes.object,
  onToolTip: propTypes.string,
  align: propTypes.string,
  offToolTip: propTypes.string,
  confirmation: propTypes.func,
  confirmations: propTypes.object,
};

export default ToggleFieldRenderer;
