import RegexPatterns from './regexPatterns';

export const orderStatusMap = {
  PENDING: {
    label: 'text_pending',
    color: 'grey',
    tipText: 'text_order_created_rider_assigned_progress',
  },
  SCHEDULED: {
    label: 'text_scheduled',
    color: 'yellow',
    tipText: 'text_order_created_rider_assigned_progress',
  },
  COMPLETED: {
    label: 'text_completed',
    color: 'green',
    tipText: 'text_rider_collected_cash_customer_order_completed_now',
  },
  CONFIRMED: {
    label: 'text_confirmed',
    color: 'yellow',
    tipText: 'text_order_has_been_confirmed',
  },
  DELIVERED: {
    label: 'text-delivered',
    color: 'green',
    tipText: 'text_rider_handed_over_order_waiting_payment',
  },
  ASSIGNED_BUDDY: {
    label: 'text_assigned_rider',
    color: 'yellow',
    tipText: 'text_rider_assigned_selecting_nearby_hub_now',
  },
  ENROUTE_TO_HUB: {
    label: 'text_enroute_hub',
    color: 'yellow',
    tipText: 'text_rider_selected_hub_moving_towards_it',
  },
  REACHED_HUB: {
    label: 'text_reached_at_hub',
    color: 'yellow',
    tipText: 'text_rider_reached_hub_collecting_order',
  },
  ARRIVED_AT_WAREHOUSE: {
    label: 'text_postponed_delivery',
    color: 'yellow',
    tipText: 'Admin marked it to be postponed',
  },
  ENROUTE_TO_DROPOFF: {
    label: 'text_enroute_dropoff',
    color: 'yellow',
    tipText: 'text_rider_collected_order_moving_towards_dropoff',
  },
  ARRIVED_AT_DROPOFF: {
    label: 'text_arrived_at_dropoff',
    color: 'yellow',
    tipText: 'text_rider_arrived_dropoff_waiting_customer_now',
  },
  BUDDY_NOT_FOUND: {
    label: 'text_rider_not_found',
    color: 'red',
    tipText: 'text_rider_not_found_nearby',
  },
  AMOUNT_REFUNDABLE: {
    label: 'text_amount_refundable',
    color: 'red',
    tipText: 'text_amount_refundable',
  },
  AMOUNT_REFUNDED: {
    label: 'text_amount_refunded',
    color: 'red',
    tipText: 'text_amount_refunded',
  },
  ADMIN_CANCELLED_ORDER: {
    label: 'text_cancelled_by_admin',
    color: 'red',
    tipText: 'text_admin_cancelled_order',
  },
  BUDDY_CANCELLED_ORDER: {
    label: 'text_cancelled_by_rider',
    color: 'red',
    tipText: 'text_rider_cancelled_order',
  },
  CUSTOMER_CANCELLED_ORDER: {
    label: 'text_cancelled_by_customer',
    color: 'red',
    tipText: 'text_customer_cancelled_order',
  },
};

export const userStatusMap = {
  ACTIVE: {
    label: 'text_active',
    color: 'blue',
    tipText: 'text_user_currently_active',
  },
  DISABLED: {
    label: 'text_disabled',
    color: 'grey',
    tipText: 'text_user_currently_disabled',
  },
};

export const serviceAreaStatusMap = {
  ACTIVE: {
    label: 'Active',
    color: 'blue',
    tipText: 'Service area is currently Active',
  },
  INACTIVE: {
    label: 'Inactive',
    color: 'grey',
    tipText: 'Service area is tentatively Inactive',
  },
};

export const availabilityStatusMap = {
  ONLINE: {
    label: 'text_online',
    color: 'green',
    tipText: 'text_rider_currently_online',
  },
  OFFLINE: {
    label: 'text_offline',
    color: 'red',
    tipText: 'text_rider_currently_offline',
  },
  ON_JOB: {
    label: 'text_on_job',
    color: 'yellow',
    tipText: 'text_rider_currently_busy_a_job',
  },
  ENGAGED: {
    label: 'text_engaged',
    color: 'blue',
    tipText: 'text_rider_currently_engaged',
  },
};

export const promoStatus = {
  ACTIVE: {
    label: 'text_active',
    value: 'ACTIVE',
    editValue: 1,
    color: 'green',
    tipText: 'text_promo_currently_active',
  },
  INACTIVE: {
    label: 'text_inactive',
    value: 'INACTIVE',
    color: 'red',
    editValue: 2,
    tipText: 'text_promo_currently_inactive',
  },
  EXPIRED: {
    label: 'text_expired',
    value: 'EXPIRED',
    editValue: 3,
    color: 'grey',
    tipText: 'text_promo_currently_expired',
  },
};

export const orderTimelineMap = [
  {
    label: 'text_requested',
    value: 'createdAt',
    nextValue: 'acceptedAt',
    bubbleTip: 'text_time_taken_to_find_the_rider',
    tipText: 'Customer created a Order, waiting for a rider to be assigned',
  },
  {
    label: 'text_accepted',
    value: 'acceptedAt',
    nextValue: 'reachedHubAt',
    bubbleTip: 'text_time_taken_to_reach_the_closest_shop',
    tipText: 'Order is assigned to a rider, on its way to shop',
  },
  {
    label: 'text_at_hub',
    value: 'reachedHubAt',
    nextValue: 'orderCollectedAt',
    bubbleTip: 'text_time_taken_to_collect_the_order',
    tipText: 'Rider reached Hub and collecting order items',
  },
  {
    label: 'text_order_picked',
    value: 'orderCollectedAt',
    nextValue: 'reachedCustomerAt',
    bubbleTip: 'text_time_taken_to_reach_the_customer',
    tipText: 'Rider collected order items and is on its way to customer',
  },
  {
    label: 'text_at_dropoff',
    value: 'reachedCustomerAt',
    nextValue: 'deliveredAt',
    bubbleTip: 'text_time_taken_to_deliver_and_collect_the_payment',
    tipText: 'Rider reached to the customer and delivering',
  },
  {
    label: 'text_completed',
    value: 'deliveredAt',
    tipText: 'Rider collected cash from customer and order is completed',
  },
];

export const orderAmountsMap = [
  {
    label: 'text_items_total',
    value: 'subTotal',
    tipText: 'Amount of all the items ordered',
  },
  {
    label: 'text_delivery_charges',
    value: 'delivery',
    tipText: 'Delivery charges applied',
  },
  {
    label: 'text_gross_total',
    value: 'total',
    tipText: 'Total cost to the order',
    bold: true,
  },
  {
    label: 'text_delivery_discount',
    value: 'deliveryChargesWaivedOff',
    tipText: 'Waived off delivery charges',
  },
  {
    label: 'text_promo_discount',
    value: 'discount',
    tipText: 'Discount availed on the order by promo',
  },
  {
    label: 'text_package_discount',
    value: 'packageDiscount',
    tipText: 'Discount availed on the package',
  },
  {
    label: 'text_net_total',
    value: 'orderTotal',
    tipText: 'Amount billed to the user',
    bold: true,
  },
  {
    label: 'text_amount_received',
    value: 'amountReceived',
    tipText: 'Amount received by the rider',
  },
];

export const exportFormats = [
  {
    label: 'text_pdf',
    value: 'pdf',
  },
  {
    label: 'text_excel',
    value: 'xls',
  },
  {
    label: 'text_csv',
    value: 'csv',
  },
];

export const orderActions = [
  {
    label: 'text_postponed_delivery',
    value: 'arrivedWarehouse',
  },
  {
    label: 'text_scheduled',
    value: 'scheduled',
  },
  {
    label: 'text_cancelled',
    value: 'cancelled',
  },
  {
    label: 'text_completed',
    value: 'completed',
  },
];

export const retailerStatus = [
  {
    label: 'text_all',
    value: 'ALL',
  },
  {
    label: 'text_active',
    value: 'ACTIVE',
  },
  {
    label: 'text_inactive',
    value: 'INACTIVE',
  },
];

export const retailerType = [
  {
    label: 'text_all',
    value: 'ALL',
  },
  {
    label: 'text_hub',
    value: 'HUB',
  },
  {
    label: 'text_warehouse',
    value: 'WAREHOUSE',
  },
];

export const configurationsMap = [
  {
    label: 'text_adhoc_order_delivery_fee',
    value: '',
    adornment: 'LYD',
    key: 'ADHOC_ORDER_DELIVERY_FEE',
    regex: RegexPatterns.NumberWithOneOptionalDot,
  },
  {
    label: 'text_android_buddy_bumped',
    value: '',
    key: 'ANDROID_BUDDY_BUMPED',
    regex: RegexPatterns.NumberWithTwoOptionalDot,
  },
  {
    label: 'text_android_customer_bumped',
    value: '',
    key: 'ANDROID_CUSTOMER_BUMPED',
    regex: RegexPatterns.NumberWithTwoOptionalDot,
  },
  {
    label: 'text_android_retailer_bumped',
    value: '',
    key: 'ANDROID_RETAILER_BUMPED',
    regex: RegexPatterns.NumberWithTwoOptionalDot,
  },
  {
    label: 'text_convenience_fee',
    value: '',
    key: 'CONVENIENCE_FEE',
    regex: RegexPatterns.NumberWithOneOptionalDot,
  },
  {
    label: 'text_discount',
    value: '',
    key: 'DISCOUNT',
    regex: RegexPatterns.NumberWithOneOptionalDot,
  },
  {
    label: 'text_ios_customer_bumped',
    value: '',
    key: 'IOS_CUSTOMER_BUMPED',
    regex: RegexPatterns.NumberWithTwoOptionalDot,
  },
  {
    label: 'text_maximum_order_value',
    value: '',
    adornment: 'LYD',
    key: 'MAXIMUM_ORDER_VALUE',
    regex: RegexPatterns.NumberWithOneOptionalDot,
  },
  {
    label: 'text_minimum_order_value',
    value: '',
    adornment: 'LYD',
    key: 'MINIMUM_ORDER_VALUE',
    regex: RegexPatterns.NumberWithOneOptionalDot,
  },
  {
    label: 'text_most_selling_limit',
    value: '',
    key: 'MOST_SELLING_LIMIT',
    regex: RegexPatterns.NumberWithOneOptionalDot,
  },
  {
    label: 'text_order_after_minutes',
    value: '',
    key: 'ORDER_AFTER_MINUTES',
    regex: RegexPatterns.NumberWithOneOptionalDot,
  },
  {
    label: 'text_order_after_days',
    value: '',
    key: 'ORDER_FOR_DAYS',
    regex: RegexPatterns.NumberWithOneOptionalDot,
  },
  {
    label: 'text_popular_limit',
    value: '',
    key: 'POPULAR_LIMIT',
    regex: RegexPatterns.NumberWithOneOptionalDot,
  },
  {
    label: 'text_scheduled_order_delivery_fee',
    value: '',
    adornment: 'LYD',
    key: 'SCHEDULED_ORDER_DELIVERY_FEE',
    regex: RegexPatterns.NumberWithOneOptionalDot,
  },
  {
    label: 'text_search_near_by_hub_within_region_length',
    value: '',
    key: 'SEARCH_NEAR_BY_HUB_WITHIN_REGION_LENGTH',
    regex: RegexPatterns.NumberWithOneOptionalDot,
  },
  {
    label: 'text_support_number',
    value: '',
    key: 'SUPPORT_NUMBER',
    regex: RegexPatterns.NumberWithOneOptionalDot,
  },
  {
    label: 'text_working_hour_end',
    value: '',
    key: 'WORKING_HOUR_END',
    regex: RegexPatterns.TimeFormat,
  },
  {
    label: 'text_working_hour_start',
    value: '',
    key: 'WORKING_HOUR_START',
    regex: RegexPatterns.TimeFormat,
  },
  {
    label: 'text_dispatch_radius',
    value: '',
    key: 'DISPATCH_RADIUS',
    regex: RegexPatterns.NumberWithOneOptionalDot,
  },
  {
    label: 'text_max_order_in_batch',
    value: '',
    key: 'MAX_ORDERS_IN_BATCH',
    regex: RegexPatterns.NumberWithOneOptionalDot,
  },
  {
    label: 'text_hub_search_radius',
    value: '',
    key: 'HUB_SEARCH_RADIUS',
    regex: RegexPatterns.NumberWithOneOptionalDot,
  },
  {
    label: 'text_hub_filter',
    value: '',
    key: 'HUB_FILTER',
    regex: RegexPatterns.AllString,
  },
  {
    label: 'text_special_warehouse_name',
    value: '',
    key: 'SPECIAL_WAREHOUSE_NAME',
    regex: RegexPatterns.AllString,
  },
  {
    label: 'text_aramax_warehouse_name',
    value: '',
    key: 'ARAMAX_WAREHOUSE_NAME',
    regex: RegexPatterns.AllString,
  },
  {
    label: 'text_top_categories_ids',
    value: '',
    key: 'TOP_CATEGORIES_IDS',
    regex: RegexPatterns.AllString,
  },
];

export const AllBuddiesStatus = {
  text_online: {
    label: 'Online',
    value: 'ONLINE',
  },
  text_engaged: {
    label: 'Engaged',
    value: 'ENGAGED',
  },
  text_on_job: {
    label: 'on Job',
    value: 'ON_JOB',
  },
};

export const languageMap = {
  en: { label: 'English', dir: 'ltr', active: true },
  ar: { label: 'العربية', dir: 'rtl', active: false },
  fr: { label: 'Français', dir: 'ltr', active: false },
};

export const orderTypes = {
  ADHOC: { label: 'text_adhoc', path: '/adhoc-orders' },
  SCHEDULED: { label: 'text_scheduled', path: '/scheduled-orders' },
  SUBSCRIPTION: { label: 'text_subscribed', path: '/subscribed-orders' },
  ZAKAT: { label: 'text_zakat', path: '/zakat-orders' },
  SPECIAL: { label: 'text_special', path: '/special-orders' },
};
