import React from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Tooltip from '@material-ui/core/Tooltip';
import { userStatusMap } from '../../../../utils/data/enumMap';

const StatusIndicator = ({ label, color }) => {
  return (
    <div className=" d-flex status-container">
      <div className={`indicator ${color}-indicator`} />
      <span className="status-value">{label}</span>
    </div>
  );
};

StatusIndicator.propTypes = {
  label: propTypes.string,
  color: propTypes.string,
};

const UserStatus = ({ value }) => {
  const { t } = useTranslation();
  return (
    <Tooltip title={t(userStatusMap[value]?.tipText)} placement="bottom-start" enterDelay={100}>
      <div className="status-root grey-text">
        <StatusIndicator
          label={t(userStatusMap[value]?.label)}
          color={userStatusMap[value]?.color}
        />
      </div>
    </Tooltip>
  );
};

UserStatus.propTypes = {
  value: propTypes.string,
};

export default UserStatus;
