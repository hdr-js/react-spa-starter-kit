import React from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Tooltip from '@material-ui/core/Tooltip';
import { orderStatusMap } from '../../../../utils/data/enumMap';

const StatusIndicator = ({ label, color }) => {
  const { t } = useTranslation();
  return (
    <div className=" d-flex status-container">
      <div className={`indicator ${color}-indicator`} />
      <span className="status-value">{t(label)}</span>
    </div>
  );
};

StatusIndicator.propTypes = {
  label: propTypes.string,
  color: propTypes.string,
};

const OrderStatus = ({ value }) => {
  const { t } = useTranslation();
  return (
    <Tooltip title={t(orderStatusMap[value]?.tipText)} placement="bottom-start" enterDelay={100}>
      <div className="status-root grey-text">
        <StatusIndicator
          label={orderStatusMap[value]?.label}
          color={orderStatusMap[value]?.color}
        />
      </div>
    </Tooltip>
  );
};

OrderStatus.propTypes = {
  value: propTypes.string,
};

export default OrderStatus;
