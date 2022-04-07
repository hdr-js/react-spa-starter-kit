import regexPatterns from '../../../utils/data/regexPatterns';

export default {
  formId: 'add-product',
  formTitle: 'Add Product',
  cols: 3,
  fields: {
    name: {
      name: 'name',
      renderer: 'TextField',
      label: 'text_name',
      required: true,
      translated: true,
      regex: regexPatterns.AllString,
    },
    productCategoryId: {
      name: 'productCategoryId',
      renderer: 'SelectField',
      label: 'text_category',
      required: true,
      regex: regexPatterns.NumberOnly,
    },
    productSubCategoryId: {
      name: 'productSubCategoryId',
      renderer: 'SelectField',
      label: 'text_sub_category',
      required: true,
      regex: regexPatterns.NumberOnly,
    },
    sku: {
      name: 'sku',
      renderer: 'TextField',
      label: 'text_sku',
      required: true,
      regex: regexPatterns.AllString,
    },
    price: {
      name: 'price',
      renderer: 'TextField',
      label: 'text_unit_price',
      required: true,
      regex: regexPatterns.NumberWithOneOptionalDot,
    },
    productDescription: {
      name: 'productDescription',
      renderer: 'TextField',
      label: 'text_description',
      span: 2,
      required: true,
      translated: true,
      regex: regexPatterns.AllString,
    },
  },
};
