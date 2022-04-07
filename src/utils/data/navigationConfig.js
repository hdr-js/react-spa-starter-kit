export default [
  {
    label: 'text_dashboard',
    access: ['ADMIN'],
    icon: 'DashboardOutlined',
    paths: ['dashboard', 'login', ''],
  },

  {
    label: 'text_products',
    access: ['ADMIN', 'MANAGER'],
    icon: 'WidgetsOutlined',
    paths: ['products'],
    queried: true,
  },
];
