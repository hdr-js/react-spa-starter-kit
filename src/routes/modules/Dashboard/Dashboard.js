import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import { useTranslation, withTranslation } from 'react-i18next';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import MUITable from '../../../components/common/MUITable';
import AppLoader from '../../../components/common/AppLoader';
import { orderConfig } from '../../../utils/data/tableConfigs';
import { orderTypes } from '../../../utils/data/enumMap';
import listData from './data.json';

const Dashboard = () => {
  const isStuck = record => {
    const isOutDated = (Date.now() - record.createdAt) / 60000 > 30;
    const notFinalized = ![
      'COMPLETED',
      'BUDDY_NOT_FOUND',
      'ADMIN_CANCELLED_ORDER',
      'BUDDY_CANCELLED_ORDER',
      'CUSTOMER_CANCELLED_ORDER',
      'SCHEDULED',
      'ARRIVED_AT_WAREHOUSE',
      'AMOUNT_REFUNDABLE',
      'AMOUNT_REFUNDED',
    ].includes(record.status);
    return isOutDated && notFinalized;
  };

  const { t } = useTranslation();

  const normalizeTableData = source => {
    return source.map(record => ({
      id: record.id,
      refId: `${record?.id} - (${record?.refId})`,
      customer: record.customer.name,
      buddy: record?.rider?.name || 'N/A',
      rating: record.rider ? record?.rider?.rating : 'N/A',
      createdAt: record.createdAt,
      amount: {
        total: record.total || 0,
        subTotal: record.subTotal || 0,
        delivery: record.delivery || 0,
        discount: record.discount || 0,
        waivedOff: record.deliveryChargesWaivedOff || 0,
        received: record.amountReceived || 0,
      },
      status: record.status,
      scheduledFor: record?.status === 'SCHEDULED' ? record?.scheduledFor : null,
      paymentMethod:
        record?.userPaymentMethodDto?.paymentMethodId === 2
          ? t('text_credit_card')
          : t('text_cash_on_delivery'),
      suspicious: isStuck(record),
    }));
  };

  return (
    <React.Fragment>
      <div className="dashboard-root">
        <div className="order-list-container">
          <MUITable
            titleBar={{
              title: t('text_recent_orders'),
            }}
            sorting={{
              column: 'id',
              descending: true,
              onSort: () => {},
            }}
            config={orderConfig}
            isLoading={false}
            list={normalizeTableData(listData)}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  t: propTypes.func,
  dashboardStats: propTypes.object,
  KPIStats: propTypes.object,
  orderList: propTypes.object,
  getRecentOrder: propTypes.func,
  getDashboardStats: propTypes.func,
  getDashboardOrderStats: propTypes.func,
};

export default Dashboard;
