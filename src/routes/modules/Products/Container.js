// import { withRouter } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

// import {
//   productListRequest,
//   toggleProductStatusRequest,
//   uploadProductRequest,
// } from '../../../redux/actions/products';
// import Products from './Products';
// import { uiNotify } from '../../../utils/data/notifications';
// import { askConfirmation } from '../../../redux/actions/confirmation';

// const mapStateToProps = ({ products }) => ({
//   productsList: products.list,
// });

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     {
//       getProductList: data => productListRequest(data),
//       toggleProductStatus: data => toggleProductStatusRequest(data),
//       uploadProductBulk: data => uploadProductRequest(data),
//       askConfirmation: data => askConfirmation(data),
//       notify: data => uiNotify(data),
//     },
//     dispatch,
//   );
// };

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Products));
