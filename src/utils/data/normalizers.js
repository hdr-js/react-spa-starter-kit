import moment from 'moment';

export const orderReportDataNormalizer = source => {
  return source.map(record => ({
    orderId: record.orderId,
    orderReferenceId: record.referenceId,
    orderType: record.type,
    orderStatus: record.status,
    orderCreatedAt: moment(record.createdDate).format('YYYY-MM-DD hh:mm:ss a'),
    orderCustomerId: record?.customerId || 'N/A',
    orderCustomerName: record?.customerName || 'N/A',
    orderBuddyId: record?.buddyId || 'N/A',
    orderBuddyName: record?.buddyName || 'N/A',
    orderRetailerId: record?.hubId || 'N/A',
    orderRetailerType: record?.hubType || 'N/A',
    orderRetailerName: record?.hubName || 'N/A',
    orderPaymentType: record?.paymentType || 'N/A',
    orderCustomerPaymentReference: record?.customerPaymentReference || 'N/A',
    orderRetailerAmount: `LYD ${record?.subTotal || 0}`,
    orderDeliveryCharges: `LYD ${record?.delivery || 0}`,
    orderDeliveryDiscount: `LYD ${record?.deliveryChargesWaivedOff || 0}`,
    orderDiscount: `LYD ${record?.orderDiscount || 0}`,
    orderTotal: `LYD ${record?.orderTotal || 0}`,
    orderAmountReceived: `LYD ${record?.amountReceived || 0}`,
  }));
};

export const warehouseListDataNormalizer = source => {
  return source
    ?.map(({ orderItemDetailList, ...record }) => {
      return orderItemDetailList?.map(item => ({
        warehouseOrderReference: record?.orderReference,
        warehouseOrderType: record?.orderType,
        warehouseCreatedAt: moment(record?.createdDate).format('YYYY-MM-DD hh:mm:ss a'),
        warehouseCustomerId: record?.customerId || 'N/A',
        warehouseCustomerName: record?.customerName || 'N/A',
        warehouseRiderId: record?.riderId || 'N/A',
        warehouseRiderName: record?.riderName || 'N/A',
        warehouseId: record?.warehouseId || 'N/A',
        warehouseName: record?.warehouseName || 'N/A',
        warehousePaymentType: record?.paymentType || 'N/A',
        warehousePaymentReference: record?.paymentReference || 'N/A',
        warehouseProductName: item?.productName || 'N/A',
        warehouseUpdatedQuantity: item?.updatedQuantity || 'N/A',
        warehouseSku: item?.sku || 'N/A',
        warehousePrice: `LYD ${item?.price}` || 0,
        warehouseTotalPrice: `LYD ${item?.totalPrice}` || 0,
      }));
    })
    .flat();
};

export const scheduledWarehouseListDataNormalizer = source => {
  return source
    ?.map(({ orderItemDetailList, ...record }) => {
      return orderItemDetailList?.map(item => ({
        scheduledWarehouseOrderReference: record?.orderReference,
        scheduledWarehouseOrderType: record?.orderType,
        scheduledWarehouseCreatedAt: moment(record?.createdDate).format('YYYY-MM-DD hh:mm:ss a'),
        scheduledWarehouseCustomerId: record?.customerId || 'N/A',
        scheduledWarehouseCustomerName: record?.customerName || 'N/A',
        scheduledWarehouseRiderId: record?.riderId || 'N/A',
        scheduledWarehouseRiderName: record?.riderName || 'N/A',
        scheduledWarehouseId: record?.warehouseId || 'N/A',
        scheduledWarehouseName: record?.warehouseName || 'N/A',
        scheduledWarehousePaymentType: record?.paymentType || 'N/A',
        scheduledWarehousePaymentReference: record?.paymentReference || 'N/A',
        scheduledWarehouseProductId: item?.productId || 'N/A',
        scheduledWarehouseProductName: item?.productName || 'N/A',
        scheduledWarehouseSupplierName: item?.supplierName || 'N/A',
        scheduledWarehouseUpdatedQuantity: item?.updatedQuantity || 'N/A',
        scheduledWarehousePrice: `LYD ${item?.price}` || 0,
        scheduledWarehouseTotalPrice: `LYD ${item?.totalPrice}` || 0,
      }));
    })
    .flat();
};
