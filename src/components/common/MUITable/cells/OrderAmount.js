import React from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Tooltip from '@material-ui/core/Tooltip';

const formatAmount = value => `LYD. ${Number(value).toLocaleString('en')}`;

const OrderAmount = ({ value }) => {
  const { t } = useTranslation();
  return (
    <Tooltip
      title={
        <React.Fragment>
          <div className="w-100 d-flex justify-content-between">
            {t('text_total')} <span>{formatAmount(value.total)}</span>
          </div>
          <div className="w-100 d-flex justify-content-between">
            {t('text_subtotal')} <span>{formatAmount(value.subTotal)}</span>
          </div>
          <div className="w-100 d-flex justify-content-between">
            {t('text_delivery')} <span>{formatAmount(value.delivery)}</span>
          </div>
          <div className="w-100 d-flex justify-content-between">
            {t('text_discount')} <span>{formatAmount(value.discount)}</span>
          </div>
          <div className="w-100 d-flex justify-content-between">
            {t('text_waivedoff')} <span>{formatAmount(value.waivedOff)}</span>
          </div>
          <div className="w-100 d-flex justify-content-between">
            {t('text_received')} <span>{formatAmount(value.received)}</span>
          </div>
        </React.Fragment>
      }
      placement="bottom-start"
      enterDelay={100}
    >
      <div className="amount-root grey-text">{formatAmount(value.total)}</div>
    </Tooltip>
  );
};

OrderAmount.propTypes = {
  value: propTypes.object,
};

export default OrderAmount;
