import React from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Tooltip from '@material-ui/core/Tooltip';
import { availabilityStatusMap } from '../../../../utils/data/enumMap';

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

const AvailabilityStatus = ({ value }) => {
  const { t } = useTranslation();
  return (
    <Tooltip
      title={t(availabilityStatusMap[value]?.tipText)}
      placement="bottom-start"
      enterDelay={100}
    >
      <div className="status-root grey-text">
        <StatusIndicator
          label={t(availabilityStatusMap[value]?.label)}
          color={availabilityStatusMap[value]?.color}
        />
      </div>
    </Tooltip>
  );
};

AvailabilityStatus.propTypes = {
  value: propTypes.string,
};

export default AvailabilityStatus;
