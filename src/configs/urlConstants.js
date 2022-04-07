const { API_ENDPOINT } = process.env;
// Auth
export const GET_LOGIN_TOKEN_URL = `${API_ENDPOINT}/oauth/token`;
export const GET_LOGIN_ROLE_URL = `${API_ENDPOINT}/v1/api/users`;
export const AUTH_TOKEN = 'cc7bb049-db31-41e5-8684-50f0b06411fd';

// CustomerManagement
export const CUSTOMERS_LIST = `${API_ENDPOINT}/v1/api/users/role/ROLE_CUSTOMER`;
export const CUSTOMER_DETAILS = `${API_ENDPOINT}/v1/api/users`;
export const CUSTOMER_UPDATE = `${API_ENDPOINT}/v1/api/users`;
export const CUSTOMER_CHANGE_STATUS = `${API_ENDPOINT}/v1/api/users`;

// BuddyManagement
export const BUDDIES_LIST = `${API_ENDPOINT}/v1/api/users/role/ROLE_BUDDY`;
export const BUDDIES_LIST_BY_STATUS = `${API_ENDPOINT}/v1/api/buddies/status`;
export const BUDDY_STATS = `${API_ENDPOINT}/v1/api/fleetpartner/stats/buddy-stats`;
export const BUDDY_TIME_REPORTING_STATS = `${API_ENDPOINT}/v1/api/fleetpartner/stats/buddies-online-stats`;
export const BUDDY_DETAILS = `${API_ENDPOINT}/v1/api/users`;
export const BUDDY_EARNING_LIST = `${API_ENDPOINT}/v1/api/buddy/earning/list`;
export const BUDDY_UPDATE = `${API_ENDPOINT}/v1/api/users`;
export const BUDDY_CHANGE_STATUS = `${API_ENDPOINT}/v1/api/users`; //  POST /user/{id}/{activityStatus}

// OrderManagement
export const ORDERS_LIST = `${API_ENDPOINT}/v2/api/orders/list`;
export const ORDER_DETAILS = `${API_ENDPOINT}/v2/api/orders`;
export const ORDER_STATUS_LOG = `${API_ENDPOINT}/v2/api/orders/log`;
export const ORDER_ITEMS_EDIT = `${API_ENDPOINT}/v2/api/orders`;
export const ORDER_CHANGE_STATUS = `${API_ENDPOINT}/v2/api/orders/cancel`;
export const MARK_ORDER_AS_COMPLETE = `${API_ENDPOINT}/v2/api/orders/update-order`;
export const ORDER_RECEIPT_IMAGE = `${API_ENDPOINT}/v2/api/orders/receipt-image-url`;
export const ORDER_INVOICE = `${API_ENDPOINT}/v2/api/orders/invoice`;
export const UPDATE_ORDER_ITEMS = `${API_ENDPOINT}/v2/api/orders`;
export const REFUNDED_ORDER_UPLOAD = `${API_ENDPOINT}/v2/api/orders/update`;

// ProductManagement
export const PRODUCT_LIST = `${API_ENDPOINT}/v1/public/products`;
export const PRODUCT_DETAILS = `${API_ENDPOINT}/v1/public/products`;
export const PRODUCT_UPDATE = `${API_ENDPOINT}/v1/api/products`;
export const ADD_PRODUCT = `${API_ENDPOINT}/v1/api/products`;
export const HUB_PRODUCT_LIST = `${API_ENDPOINT}/v1/api/hubs/product`;
export const UPLOAD_HUB_PRODUCTS_BULK = `${API_ENDPOINT}/v1/api/hubs/product/upload`;
export const UPLOAD_PRODUCTS_BULK = `${API_ENDPOINT}/v1/api/products/upload`;

// PackageManagement
export const PACKAGE_LIST = `${API_ENDPOINT}/v1/public/packages`;
export const PACKAGE_DETAILS = `${API_ENDPOINT}/v1/public/packages`;
export const PACKAGE_UPDATE = `${API_ENDPOINT}/v1/api/package`;
export const ADD_PACKAGE = `${API_ENDPOINT}/v1/api/package`;
export const TOGGLE_PACKAGE_STATUS = `${API_ENDPOINT}/v1/api/package`;

// ConfigurationManagement
export const CONFIGURATION_DETAILS = `${API_ENDPOINT}/v1/api/app/configurations`;
export const CONFIGURATION_UPDATE = `${API_ENDPOINT}/v1/api/app/configurations`;

// Knowledge Base URLs
export const COUNTRIES_LIST = `${API_ENDPOINT}/v1/public/countries`;
export const SERVICE_AREA_LIST = `${API_ENDPOINT}/v1/public/serviceArea`;
export const SERVICE_AREA_EDIT = `${API_ENDPOINT}/v1/api/serviceArea`;
export const SERVICE_AREA_SAVE = `${API_ENDPOINT}/v1/api/serviceArea`;

// Resource URLs
export const RESOURCE_URL = `${API_ENDPOINT}/v2/public/resources/`;
export const RESOURCE_POST_URL = `${API_ENDPOINT}/v1/api/resources/upload`;

// Reporting URLs
export const BUDDY_EARNING_REPORT = `${API_ENDPOINT}/v1/api/buddy/earning/all`;
export const REPORT_BASE_URL = `${API_ENDPOINT}/v1/api/reports/`;
export const WAREHOUSE_LIST_REPORT = `${API_ENDPOINT}/v2/api/orders/warehouse/list`;
export const SCHEDULED_ORDER_ITEM = `${API_ENDPOINT}/v2/api/orders/scheduled/items-details/download`;

// Activity Logs
export const ACTIVITY_LOGS_LIST = `${API_ENDPOINT}/v1/api/activityLogs`;
export const ACTIVITY_LOGS_FILTERS = `${API_ENDPOINT}/v1/api/activityLogs/filters`;

// ReCaptcha
export const VERIFY_RECAPTCHA = `${API_ENDPOINT}/v1/public/recaptcha`;

// Dashboard
export const DASHBOARD_FLEET_PARTNER_STATS = `${API_ENDPOINT}/v1/api/fleetpartner/stats`;
export const DASHBOARD_STATS = `${API_ENDPOINT}/v1/api/reports/users/stats`;
export const DASHBOARD_ORDER_STATS = `${API_ENDPOINT}/v2/api/orders/stats`;

// Retailers
export const RETAILER_LIST = `${API_ENDPOINT}/v1/api/hubs/all`;
export const TOGGLE_RETAILER_STATUS = `${API_ENDPOINT}/v1/api/hubs`;
export const UPLOAD_RETAILERS_BULK = `${API_ENDPOINT}/v1/api/hubs/upload`;
export const RETAILER_DETAILS = `${API_ENDPOINT}/v1/api/hubs`;
export const RETAILER_UPDATE = `${API_ENDPOINT}/v1/api/hubs`;
export const ADD_RETAILER = `${API_ENDPOINT}/v1/api/hubs`;
export const RETAILER_USERS_LIST = `${API_ENDPOINT}/v1/api/users/role/ROLE_RETAILER`;
export const RETAILER_USERS_CHANGE_STATUS = `${API_ENDPOINT}/v1/api/users`;
export const RETAILER_USER_DETAIL = `${API_ENDPOINT}/v1/api/users`;
export const RETAILER_USER_UPDATE = `${API_ENDPOINT}/v1/api/users`;
export const RETAILER_USER_APPROVE = `${API_ENDPOINT}/v1/api/users`;

// Application Banners
export const APP_BANNER_LIST = `${API_ENDPOINT}/v1/public/featuredProducts`;
export const SAVE_APP_BANNER = `${API_ENDPOINT}/v1/api/featuredProducts`;
export const DELETE_APP_BANNER = `${API_ENDPOINT}/v1/api/featuredProducts`;

// Promo Codes
export const PROMO_LIST = `${API_ENDPOINT}/v1/api/promo-codes`;
export const CHANGE_PROMO_STATUS = `${API_ENDPOINT}/v1/api/promo-codes`;
export const CREATE_PROMO = `${API_ENDPOINT}/v1/api/promo-codes`;
export const EDIT_PROMO = `${API_ENDPOINT}/v1/api/promo-codes`;

// categories
export const CATEGORIES_LIST = `${API_ENDPOINT}/v1/public/categories`;
export const CATEGORIES_DETAILS = `${API_ENDPOINT}/v1/public/categories`;
export const UPDATE_CATEGORY = `${API_ENDPOINT}/v1/api/categories`;
export const ADD_CATEGORY = `${API_ENDPOINT}/v1/api/categories`;

// LocalStorage Secret Keyproducts
export const LOCAL_STORAGE_KEY = 'MUNCHIES_1989_95_14';

export const USER_ROLE_ADMIN = 'ROLE_ADMIN';
export const USER_ROLE_FLEET_PARTNER = 'ROLE_FLEET_PARTNER';
export const USER_ROLE_FLEET_PARTNER_READ_ONLY = 'ROLE_FLEET_PARTNER_READ_ONLY';
