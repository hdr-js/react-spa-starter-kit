import React from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import queryString from 'query-string';
import MUITable from '../../../components/common/MUITable';
import FilterSelect from '../../../components/common/FilterSelect';
import DebounceField from '../../../components/common/DebounceField';
import AppLoader from '../../../components/common/AppLoader';
import { productsConfig } from '../../../utils/data/tableConfigs';
import './products.scss';

const Products = () => {
  const { t } = useTranslation();

  const normalizeTableData = source => {
    const result = [];
    source.forEach(record => {
      result.push({
        id: record.id,
        name: record.name,
        category: record.productCategoryName,
        sku: record.sku,
        createdAt: record?.createdAt,
        price: record.price,
        status: {
          value: record?.isActive,
          onChange: () => {},
          disabled: false,
          confirmations: [
            t('text_you_want_mark_product_as_inactive'),
            t('text_you_want_mark_product_as_active'),
          ],
        },
      });
    });
    return result;
  };

  const productsList = { data: [], isLoading: false, totalRecords: 0 };

  return (
    <React.Fragment>
      {productsList.isLoading && <AppLoader />}
      <div className="products-root">
        <div className="products-filters-container">
          <div className="search-filter-bar">
            <FilterSelect variant="products" onUpdate={() => {}} values={{}} />
            <DebounceField value="" onUpdate={() => {}} />
          </div>
        </div>
        <MUITable
          config={productsConfig}
          isLoading={productsList.isLoading}
          list={normalizeTableData(productsList.data)}
          sorting={{
            column: 'id',
            descending: true,
            onSort: () => {},
          }}
          pagination={{
            totalRecords: productsList.totalRecords,
            pageNumber: 0,
            pageSize: 10,
            onChangePageNumber: () => {},
            onChangePageSize: () => {},
          }}
          onSelect={{
            path: '/products',
            lastState: queryString.stringify(
              {},
              {
                sort: false,
                arrayFormat: 'bracket',
              },
            ),
          }}
        />
      </div>
    </React.Fragment>
  );
};

Products.propTypes = {
  productsList: propTypes.object,
  getProductList: propTypes.func,
  uploadProductBulk: propTypes.func,
  toggleProductStatus: propTypes.func,
  t: propTypes.func,
  location: propTypes.any,
  history: propTypes.any,
  match: propTypes.any,
  askConfirmation: propTypes.func,
  notify: propTypes.func,
};

export default Products;
