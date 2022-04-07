// import { withRouter } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

// import {
//   addProductRequest,
//   productDetailsRequest,
//   clearProductDetails,
//   updateProductRequest,
// } from '../../../redux/actions/products';
// import { categoryListRequest } from '../../../redux/actions/categories';
// import { askConfirmation } from '../../../redux/actions/confirmation';
// import Product from './Product';
// import { uiNotify } from '../../../utils/data/notifications';

// const mapStateToProps = ({ products, categories }) => ({
//   categoryList: categories.list,
//   productDetails: products.product,
// });

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     {
//       getCategoryList: data => categoryListRequest(data),
//       askConfirmation: data => askConfirmation(data),
//       addProduct: data => addProductRequest(data),
//       getProductDetails: data => productDetailsRequest(data),
//       clearProductDetails: data => clearProductDetails(data),
//       updateProduct: data => updateProductRequest(data),
//       notify: data => uiNotify(data),
//     },
//     dispatch,
//   );
// };

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Product));
