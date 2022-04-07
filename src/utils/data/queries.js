/* eslint-disable max-len */
export default {
  riders: {
    label: 'text_riders',
    path: '/riders',
    query: 'pageNumber=1&pageSize=50&sortProperties[]=id&descending=true&active=true&status=ALL',
  },
  'adhoc-orders': {
    label: 'text_adhoc_orders',
    path: '/adhoc-orders',
    query:
      'pageNumber=1&pageSize=50&sortProperties[]=createdAt&descending=true&orderStatus[]=PENDING&orderStatus[]=SCHEDULED&orderStatus[]=COMPLETED&orderStatus[]=DELIVERED&orderStatus[]=ASSIGNED_BUDDY&orderStatus[]=ENROUTE_TO_HUB&orderStatus[]=REACHED_HUB&orderStatus[]=ARRIVED_AT_WAREHOUSE&orderStatus[]=ENROUTE_TO_DROPOFF&orderStatus[]=ARRIVED_AT_DROPOFF&orderStatus[]=BUDDY_NOT_FOUND&orderStatus[]=ADMIN_CANCELLED_ORDER&orderStatus[]=BUDDY_CANCELLED_ORDER&orderStatus[]=AMOUNT_REFUNDED&orderStatus[]=AMOUNT_REFUNDABLE&orderStatus[]=CUSTOMER_CANCELLED_ORDER&orderStatus[]=CONFIRMED',
  },
  'zakat-orders': {
    label: 'text_zakat_orders',
    path: '/zakat-orders',
    query:
      'pageNumber=1&pageSize=50&sortProperties[]=createdAt&descending=true&orderStatus[]=PENDING&orderStatus[]=SCHEDULED&orderStatus[]=COMPLETED&orderStatus[]=DELIVERED&orderStatus[]=ASSIGNED_BUDDY&orderStatus[]=ENROUTE_TO_HUB&orderStatus[]=REACHED_HUB&orderStatus[]=ARRIVED_AT_WAREHOUSE&orderStatus[]=ENROUTE_TO_DROPOFF&orderStatus[]=ARRIVED_AT_DROPOFF&orderStatus[]=BUDDY_NOT_FOUND&orderStatus[]=ADMIN_CANCELLED_ORDER&orderStatus[]=BUDDY_CANCELLED_ORDER&orderStatus[]=AMOUNT_REFUNDED&orderStatus[]=AMOUNT_REFUNDABLE&orderStatus[]=CUSTOMER_CANCELLED_ORDER&orderStatus[]=CONFIRMED',
  },
  'subscribed-orders': {
    label: 'text_subscribed_orders',
    path: '/subscribed-orders',
    query:
      'pageNumber=1&pageSize=50&sortProperties[]=createdAt&descending=true&orderStatus[]=PENDING&orderStatus[]=SCHEDULED&orderStatus[]=COMPLETED&orderStatus[]=DELIVERED&orderStatus[]=ASSIGNED_BUDDY&orderStatus[]=ENROUTE_TO_HUB&orderStatus[]=REACHED_HUB&orderStatus[]=ARRIVED_AT_WAREHOUSE&orderStatus[]=ENROUTE_TO_DROPOFF&orderStatus[]=ARRIVED_AT_DROPOFF&orderStatus[]=BUDDY_NOT_FOUND&orderStatus[]=ADMIN_CANCELLED_ORDER&orderStatus[]=BUDDY_CANCELLED_ORDER&orderStatus[]=AMOUNT_REFUNDED&orderStatus[]=AMOUNT_REFUNDABLE&orderStatus[]=CUSTOMER_CANCELLED_ORDER&orderStatus[]=CONFIRMED',
  },
  'scheduled-orders': {
    label: 'text_scheduled_orders',
    path: '/scheduled-orders',
    query:
      'pageNumber=1&pageSize=50&sortProperties[]=createdAt&descending=true&orderStatus[]=PENDING&orderStatus[]=SCHEDULED&orderStatus[]=COMPLETED&orderStatus[]=DELIVERED&orderStatus[]=ASSIGNED_BUDDY&orderStatus[]=ENROUTE_TO_HUB&orderStatus[]=REACHED_HUB&orderStatus[]=ARRIVED_AT_WAREHOUSE&orderStatus[]=ENROUTE_TO_DROPOFF&orderStatus[]=ARRIVED_AT_DROPOFF&orderStatus[]=BUDDY_NOT_FOUND&orderStatus[]=ADMIN_CANCELLED_ORDER&orderStatus[]=BUDDY_CANCELLED_ORDER&orderStatus[]=AMOUNT_REFUNDED&orderStatus[]=AMOUNT_REFUNDABLE&orderStatus[]=CUSTOMER_CANCELLED_ORDER&orderStatus[]=CONFIRMED',
  },
  'special-orders': {
    label: 'text_eid_special_orders',
    path: '/special-orders',
    query:
      'pageNumber=1&pageSize=50&sortProperties[]=createdAt&descending=true&orderStatus[]=PENDING&orderStatus[]=SCHEDULED&orderStatus[]=COMPLETED&orderStatus[]=DELIVERED&orderStatus[]=ASSIGNED_BUDDY&orderStatus[]=ENROUTE_TO_HUB&orderStatus[]=REACHED_HUB&orderStatus[]=ARRIVED_AT_WAREHOUSE&orderStatus[]=ENROUTE_TO_DROPOFF&orderStatus[]=ARRIVED_AT_DROPOFF&orderStatus[]=BUDDY_NOT_FOUND&orderStatus[]=ADMIN_CANCELLED_ORDER&orderStatus[]=BUDDY_CANCELLED_ORDER&orderStatus[]=AMOUNT_REFUNDED&orderStatus[]=AMOUNT_REFUNDABLE&orderStatus[]=CUSTOMER_CANCELLED_ORDER&orderStatus[]=CONFIRMED',
  },
  customers: {
    label: 'text_customers',
    path: '/customers',
    query: 'pageNumber=1&pageSize=50&sortProperties[]=id&descending=true&active=true',
  },
  'general-categories': {
    label: 'text_general_categories',
    path: '/general-categories',
  },
  'top-categories': {
    label: 'text_top_categories',
    path: '/top-categories',
  },
  products: {
    label: 'text_products',
    path: '/products',
    query: 'pageNumber=1&pageSize=50&sortProperties[]=id&descending=true&productStatus=BOTH',
  },
  packages: {
    label: 'text_packages',
    path: '/packages',
    query: 'pageNumber=1&pageSize=50&sortProperties[]=id&descending=true',
  },
  retailers: {
    label: 'text_retailers_inventory',
    path: '/retailers',
    query: 'pageNumber=1&pageSize=50&sortProperties[]=id&descending=true',
  },
  'retailer-users': {
    label: 'text_retailer_users',
    path: '/retailer-users',
    query: 'pageNumber=1&pageSize=50&sortProperties[]=id&descending=true',
  },
  promos: {
    label: 'text_promos',
    path: '/promos',
    query:
      'pageNumber=1&pageSize=50&sortProperties[]=createdAt&descending=true&status[]=ACTIVE&status[]=INACTIVE&status[]=EXPIRED',
  },
  'service-areas': {
    label: 'Service Areas',
    path: '/service-areas',
    query:
      'pageNumber=1&pageSize=50&sortProperties[]=id&descending=true&activeStatus[]=ACTIVE&activeStatus[]=INACTIVE',
  },
  'time-reporting': {
    label: 'Time Reporting',
    path: '/buddies-time-reporting',
    query: 'pageNumber=1&pageSize=50&sortProperties[]=id&descending=true&active=true&status=ALL',
  },
};
