import React from 'react';

const components = ['Root', 'Login', 'Dashboard', 'Products', 'Product', 'PageNotFound'];
const Components = {};
components.forEach(item => {
  Components[item] = React.lazy(() => import(`./${item}`));
});

export default Components;
