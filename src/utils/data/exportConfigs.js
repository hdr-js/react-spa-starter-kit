export const ordersExport = [
  {
    fieldName: 'id',
    fieldTitle: 'ID',
  },
  {
    fieldName: 'refId',
    fieldTitle: 'Ref ID',
  },
  {
    fieldName: 'buddy',
    fieldTitle: 'Rider Name',
  },
  {
    fieldName: 'customer',
    fieldTitle: 'customer Name',
  },
  {
    fieldName: 'createdAt',
    fieldTitle: 'Time of Order',
  },
  {
    fieldName: 'amount',
    fieldTitle: 'Amount',
  },
  {
    fieldName: 'status',
    fieldTitle: 'Status',
  },
];

export const buddyEarningExport = [
  {
    fieldName: 'buddyId',
    fieldTitle: 'Rider ID',
  },
  {
    fieldName: 'name',
    fieldTitle: 'Rider Name',
  },
  {
    fieldName: 'totalDeliveries',
    fieldTitle: 'Total Deliveries',
  },
  {
    fieldName: 'freeDeliveries',
    fieldTitle: 'Free Deliveries',
  },
  {
    fieldName: 'deliveryChargesCollected',
    fieldTitle: 'Amount Collected',
  },
  {
    fieldName: 'dispatchNoResponse',
    fieldTitle: 'No Response',
  },
  {
    fieldName: 'ordersTotal',
    fieldTitle: 'Orders Total',
  },
  {
    fieldName: 'total',
    fieldTitle: 'Total Earnings',
  },
  {
    fieldName: 'totalOnlineMinutes',
    fieldTitle: 'Total Online Time',
  },
  {
    fieldName: 'totalAmountReceived',
    fieldTitle: 'Amount Received',
  },
  {
    fieldName: 'outstandingBalance',
    fieldTitle: 'Outstanding Balance',
  },
];

export const skuReportExport = [
  {
    fieldName: 'sku',
    fieldTitle: 'Product SKU',
  },
  {
    fieldName: 'name',
    fieldTitle: 'Product Name',
  },
  {
    fieldName: 'price',
    fieldTitle: 'Unit Price (RS)',
  },
  {
    fieldName: 'salesQty',
    fieldTitle: 'Number Of Sales',
  },
  {
    fieldName: 'salesAmount',
    fieldTitle: 'Total Sales Amount (RS)',
  },
];

export const categoryReportExport = [
  {
    fieldName: 'categoryName',
    fieldTitle: 'Category Name',
  },
  {
    fieldName: 'profit',
    fieldTitle: 'Sales Profit (RS)',
  },
  {
    fieldName: 'salesAmount',
    fieldTitle: 'Sales (RS)',
  },
  {
    fieldName: 'salesQty',
    fieldTitle: 'Number Of Sales',
  },
  {
    fieldName: 'total',
    fieldTitle: 'Total',
  },
];

export const customerExportReportConfig = [
  {
    fieldName: 'customerId',
    fieldTitle: 'Customer ID',
  },
  {
    fieldName: 'customerName',
    fieldTitle: 'Customer Name',
  },
  {
    fieldName: 'ordersAmount',
    fieldTitle: 'Orders Amount (RS)',
  },
  {
    fieldName: 'totalOrders',
    fieldTitle: 'Total # Of Orders',
  },
];

export const orderDetailsReportConfig = [
  {
    fieldName: 'orderId',
    fieldTitle: 'Order ID',
  },
  {
    fieldName: 'orderReferenceId',
    fieldTitle: 'Reference ID',
  },
  {
    fieldName: 'orderType',
    fieldTitle: 'Order Type',
  },
  {
    fieldName: 'orderStatus',
    fieldTitle: 'Order Status',
  },
  {
    fieldName: 'orderCreatedAt',
    fieldTitle: 'Date',
  },
  {
    fieldName: 'orderCustomerId',
    fieldTitle: 'Customer ID',
  },
  {
    fieldName: 'orderCustomerName',
    fieldTitle: 'Customer Name',
  },
  {
    fieldName: 'orderBuddyId',
    fieldTitle: 'Rider ID',
  },
  {
    fieldName: 'orderBuddyName',
    fieldTitle: 'Rider Name',
  },
  {
    fieldName: 'orderRetailerId',
    fieldTitle: 'Retailer ID',
  },
  {
    fieldName: 'orderRetailerType',
    fieldTitle: 'Retailer Type',
  },
  {
    fieldName: 'orderRetailerName',
    fieldTitle: 'Retailer Name',
  },
  {
    fieldName: 'orderPaymentType',
    fieldTitle: 'Payment Method',
  },
  {
    fieldName: 'orderCustomerPaymentReference',
    fieldTitle: 'Customer Payment Reference',
  },
  {
    fieldName: 'orderRetailerAmount',
    fieldTitle: 'Retailer Amount',
  },
  {
    fieldName: 'orderDeliveryCharges',
    fieldTitle: 'Delivery Charges',
  },
  {
    fieldName: 'orderDeliveryDiscount',
    fieldTitle: 'Delivery Discount',
  },
  {
    fieldName: 'orderDiscount',
    fieldTitle: 'Order Discount',
  },
  {
    fieldName: 'orderTotal',
    fieldTitle: 'Order Total',
  },
  {
    fieldName: 'orderAmountReceived',
    fieldTitle: 'Amount Received',
  },
];

export const warehouseReportConfig = [
  {
    fieldName: 'warehouseOrderReference',
    fieldTitle: 'Order Reference',
  },
  {
    fieldName: 'warehouseOrderType',
    fieldTitle: 'Order Type',
  },
  {
    fieldName: 'warehouseCreatedAt',
    fieldTitle: 'Date',
  },
  {
    fieldName: 'warehouseCustomerId',
    fieldTitle: 'Customer ID',
  },
  {
    fieldName: 'warehouseCustomerName',
    fieldTitle: 'Customer Name',
  },
  {
    fieldName: 'warehouseRiderId',
    fieldTitle: 'Rider Id',
  },
  {
    fieldName: 'warehouseRiderName',
    fieldTitle: 'Rider Name',
  },
  {
    fieldName: 'warehouseId',
    fieldTitle: 'Warehouse Id',
  },
  {
    fieldName: 'warehouseName',
    fieldTitle: 'Warehouse Name',
  },
  {
    fieldName: 'warehousePaymentType',
    fieldTitle: 'Payment Type',
  },
  {
    fieldName: 'warehousePaymentReference',
    fieldTitle: 'Payment Reference',
  },
  {
    fieldName: 'warehouseProductName',
    fieldTitle: 'Item Name',
  },
  {
    fieldName: 'warehouseUpdatedQuantity',
    fieldTitle: 'Item Quantity',
  },
  {
    fieldName: 'warehouseSku',
    fieldTitle: 'Sku Number',
  },
  {
    fieldName: 'warehousePrice',
    fieldTitle: 'Sale Price',
  },
  {
    fieldName: 'warehouseTotalPrice',
    fieldTitle: 'Item Amount',
  },
];

export const scheduledWarehouseReportConfig = [
  {
    fieldName: 'scheduledWarehouseOrderReference',
    fieldTitle: 'Order Reference',
  },
  {
    fieldName: 'scheduledWarehouseOrderType',
    fieldTitle: 'Order Type',
  },
  {
    fieldName: 'scheduledWarehouseCreatedAt',
    fieldTitle: 'Date',
  },
  {
    fieldName: 'scheduledWarehouseCustomerId',
    fieldTitle: 'Customer ID',
  },
  {
    fieldName: 'scheduledWarehouseCustomerName',
    fieldTitle: 'Customer Name',
  },
  {
    fieldName: 'scheduledWarehouseRiderId',
    fieldTitle: 'Rider Id',
  },
  {
    fieldName: 'scheduledWarehouseRiderName',
    fieldTitle: 'Rider Name',
  },
  {
    fieldName: 'scheduledWarehouseId',
    fieldTitle: 'Warehouse Id',
  },
  {
    fieldName: 'scheduledWarehouseName',
    fieldTitle: 'Warehouse Name',
  },
  {
    fieldName: 'scheduledWarehousePaymentType',
    fieldTitle: 'Payment Type',
  },
  {
    fieldName: 'scheduledWarehousePaymentReference',
    fieldTitle: 'Payment Reference',
  },
  {
    fieldName: 'scheduledWarehouseProductId',
    fieldTitle: 'Item Id',
  },
  {
    fieldName: 'scheduledWarehouseProductName',
    fieldTitle: 'Item Name',
  },
  {
    fieldName: 'scheduledWarehouseSupplierName',
    fieldTitle: 'Supplier Name',
  },
  {
    fieldName: 'scheduledWarehouseUpdatedQuantity',
    fieldTitle: 'Item Quantity',
  },
  {
    fieldName: 'scheduledWarehousePrice',
    fieldTitle: 'Sale Price',
  },
  {
    fieldName: 'scheduledWarehouseTotalPrice',
    fieldTitle: 'Item Amount',
  },
];

export const customersExport = [
  {
    fieldName: 'id',
    fieldTitle: 'ID',
  },
  {
    fieldName: 'name',
    fieldTitle: 'Name',
  },
  {
    fieldName: 'phone',
    fieldTitle: 'Phone',
  },
  {
    fieldName: 'email',
    fieldTitle: 'Email',
  },
  {
    fieldName: 'city',
    fieldTitle: 'City',
  },
  {
    fieldName: 'status',
    fieldTitle: 'Status',
  },
];

export const categoriesExport = [
  {
    fieldName: 'id',
    fieldTitle: 'ID',
  },
  {
    fieldName: 'name',
    fieldTitle: 'Name',
  },
  {
    fieldName: 'updatedAt',
    fieldTitle: 'Last Modified',
  },
  {
    fieldName: 'status',
    fieldTitle: 'Status',
  },
];

export const buddiesExport = [
  {
    fieldName: 'userId',
    fieldTitle: 'ID',
  },
  {
    fieldName: 'name',
    fieldTitle: 'Name',
  },
  {
    fieldName: 'phone',
    fieldTitle: 'Phone',
  },
  {
    fieldName: 'status',
    fieldTitle: 'Status',
  },
  {
    fieldName: 'availability',
    fieldTitle: 'Availability',
  },
  {
    fieldName: 'preferred',
    fieldTitle: 'Preferred',
  },
];

export const productsExport = [
  {
    fieldName: 'id',
    fieldTitle: 'ID',
  },
  {
    fieldName: 'name',
    fieldTitle: 'Name',
  },
  {
    fieldName: 'category',
    fieldTitle: 'Category',
  },
  {
    fieldName: 'sku',
    fieldTitle: 'SKU',
  },
  {
    fieldName: 'price',
    fieldTitle: 'Price',
  },
  {
    fieldName: 'status',
    fieldTitle: 'Status',
  },
];
