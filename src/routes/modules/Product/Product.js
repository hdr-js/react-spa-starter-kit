import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import InsertPhotoOutlined from '@material-ui/icons/InsertPhotoOutlined';
import Button from '@material-ui/core/Button';

import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import Popover from '@material-ui/core/Popover';
import { useDispatch } from 'react-redux';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import Tabs from '@material-ui/core/Tabs';
import Chip from '@material-ui/core/Chip';
import { useTranslation } from 'react-i18next';
import UploadControl from '../../../components/common/UploadControl';
import formConfig from './formConfig';
import FieldRenderer from '../../../components/common/DynamicForm/FieldRenderer';
import AppLoader from '../../../components/common/AppLoader';
import { induceImageURL, uploadImageResource } from '../../../utils/helper';
import { languageMap } from '../../../utils/data/enumMap';
import { askConfirmation } from '../../../ducks/confirmation/actions';

const Product = ({
  addProduct,
  updateProduct,
  getCategoryList,
  getProductDetails,
  clearProductDetails,
  categoryList,
  notify,
  productDetails: { isLoading, data },
  match: {
    params: { productId },
  },
}) => {
  const dispatch = useDispatch();
  const [fieldValues, setFieldValues] = React.useState({});
  const [isUpdated, setIsUpdated] = React.useState(false);

  const [errorLabel, setErrorLabel] = React.useState({});

  const [fieldLanguage, setFieldLanguage] = React.useState(0);
  const [languageMenuAnchor, setLanguageMenuAnchor] = React.useState(null);
  const [translationFields, setTranslationFields] = React.useState({});

  const { t } = useTranslation();

  const normalizeTranslations = list => {
    const results = {};
    list.forEach(item => {
      results[item?.localeDto?.code] = { name: item?.name, productDescription: item?.description };
      languageMap[item?.localeDto?.code].active = true;
    });
    return results;
  };

  React.useEffect(() => {
    getCategoryList({ includeSubCategories: true });
    if (productId !== 'create') getProductDetails({ id: productId });
    return () => {
      clearProductDetails();
    };
  }, [productId]);

  React.useEffect(() => {
    if (productId !== 'create') {
      setFieldValues({
        name: data?.name,
        productCategoryId: data?.category?.parentCategoryId,
        productSubCategoryId: data?.category?.id,
        sku: data?.sku,
        price: data?.price,
        productDescription: data?.productDescription,
        imageUrl: data?.imageUrl,
        isActive: data?.isActive,
      });

      setTranslationFields(normalizeTranslations(data?.productsTranslation || []));
    }
  }, [data]);

  const mergedCategoryList = [].concat(
    categoryList?.data[0]?.topCategories,
    categoryList?.data[0]?.categories,
  );

  const emptyField = field => {
    if (field.name === 'productCategoryId') {
      fieldValues.productSubCategoryId = '';
      setErrorLabel({});
    }
  };

  const handleFieldChange = field => ({ target: { value } }) => {
    setIsUpdated(true);
    emptyField(field);
    if (fieldLanguage === 0) {
      setFieldValues({
        ...fieldValues,
        [field.name]: value,
      });
    } else {
      const selectedLanguage = Object.keys(languageMap)[fieldLanguage];
      setTranslationFields({
        ...translationFields,
        [selectedLanguage]: {
          ...translationFields[selectedLanguage],
          [field.name]: value,
        },
      });
    }
  };

  const handleImageChange = async event => {
    const response = await uploadImageResource(event);
    if (!isUpdated) setIsUpdated(true);
    setFieldValues({
      ...fieldValues,
      imageUrl: response,
    });
  };

  const validate = fieldSet => {
    const error = {};
    Object.keys(fieldSet).forEach(key => {
      if (!fieldSet[key]?.toString()?.length || !formConfig.fields[key].regex.test(fieldSet[key])) {
        error[key] = `${t(formConfig.fields[key].label)} ${t('text_is_invalid')}`;
      }
    });
    return error;
  };

  const handleSave = () => {
    const {
      name,
      price,
      productCategoryId,
      productDescription,
      sku,
      imageUrl,
      productSubCategoryId,
    } = fieldValues;
    const errors = validate({
      name,
      price,
      productCategoryId,
      productDescription,
      sku,
      productSubCategoryId,
    });
    const payload = {
      imageUrl: fieldValues?.imageUrl,
      isActive: fieldValues?.isActive || false,
      name: fieldValues?.name,
      price: fieldValues?.price,
      productCategoryId: parseInt(fieldValues?.productSubCategoryId),
      productDescription: fieldValues?.productDescription,
      sku: fieldValues?.sku,
      translatedData: translationFields,
    };

    if (!Object.keys(errors).length && imageUrl?.length) {
      setErrorLabel({});
      dispatch(
        askConfirmation({
          message: t('text_you_want_to_save_the_details'),
          callback: response => {
            if (response) {
              if (productId === 'create') {
                addProduct(payload);
              } else {
                updateProduct({ id: productId, ...payload });
              }
            }
          },
        }),
      );
    } else {
      setErrorLabel(errors);
      if (!imageUrl?.length) {
        notify({
          variant: 'error',
          message: t('text_image_is_required'),
        });
      }
    }
    return 0;
  };

  const getElement = source => {
    return source?.find(record => {
      return record?.id === fieldValues?.productCategoryId;
    });
  };

  const normalizeSubCategory = source => {
    if (source?.length > 0) {
      return source?.map(record => ({
        value: record.id,
        label: record.name,
      }));
    }
    return [];
  };

  const normalizeCategories = source => {
    return source?.map(record => ({
      value: record?.id,
      label: record?.name,
    }));
  };

  const selectionProp = field => {
    if (field.renderer === 'SelectField' && field.name === 'productCategoryId') {
      return {
        ...field?.props,
        options: normalizeCategories(mergedCategoryList) || [],
      };
    }
    if (field.renderer === 'SelectField' && field.name === 'productSubCategoryId') {
      return {
        ...field?.props,
        options: normalizeSubCategory(getElement(mergedCategoryList)?.subCategories) || [],
      };
    }
    return false;
  };

  const handleAddLanguage = (value, index) => {
    setIsUpdated(true);
    languageMap[value].active = true;
    setFieldLanguage(index);
    if (value !== 'en') {
      setTranslationFields({
        ...translationFields,
        [value]: {
          name: '',
          productDescription: '',
        },
      });
    }
  };

  const getFieldValue = name => {
    if (
      fieldLanguage === 0 ||
      ['productCategoryId', 'productSubCategoryId', 'sku', 'price'].includes(name)
    ) {
      return fieldValues[name];
    }
    const selectedLanguage = Object.keys(languageMap)[fieldLanguage];
    const selectedTranslation = translationFields[selectedLanguage] || {};
    return selectedTranslation[name] || '';
  };

  const normalizeClothColorSize = () => {
    return data?.productsSize
      ?.map(({ availableColors, ...record }) => {
        return availableColors?.map(item => ({
          size: record.size,
          color: item.color,
        }));
      })
      .flat();
  };

  return (
    <Fragment>
      {isLoading && <AppLoader />}
      {data?.id && productId === 'create' && <Redirect to={`/products/${data?.id}`} />}
      <div className="product-root">
        <div className="product-card">
          <div className="d-flex product-body">
            <div className="details-root">
              <div>
                <h1
                  className={`product-title ${
                    !fieldValues?.name || !fieldValues?.name === '' ? 'grey-title' : ''
                  }`}
                >
                  {fieldValues?.name || t('text_untitled')}
                </h1>
                <div className="product-status">
                  <h4 className="info-label">{t('text_status')}</h4>
                  <div className="info-value">
                    <Switch
                      color="primary"
                      checked={fieldValues?.isActive || false}
                      onChange={({ target: { checked } }) => {
                        if (!isUpdated) setIsUpdated(true);
                        setFieldValues({ ...fieldValues, isActive: checked });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="image-container">
              <div className="d-flex justify-content-center align-items-center image-preview-container">
                {fieldValues?.imageUrl ? (
                  <img className="img-fluid" src={induceImageURL(fieldValues?.imageUrl)} alt="" />
                ) : (
                  <InsertPhotoOutlined className="image-placeholder" />
                )}
              </div>
              <UploadControl onChange={handleImageChange} accept="image/*">
                <div className="upload-image-btn">{t('text_upload_image')}</div>
              </UploadControl>
              <h4 className="image-res">1000 X 1000</h4>
            </div>
          </div>
          <Tabs
            className="theme-btn"
            value={fieldLanguage}
            onChange={(e, value) => {
              setFieldLanguage(value);
            }}
            indicatorColor="primary"
          >
            {Object.keys(languageMap)
              .filter(item => languageMap[item].active)
              .map(item => (
                <Tab className="theme-btn" key={item} label={languageMap[item].label} />
              ))}
            <IconButton
              variant="contained"
              color="primary"
              className="circular-btn add-language-btn"
              onClick={({ currentTarget }) => setLanguageMenuAnchor(currentTarget)}
              disabled={Object.values(languageMap).filter(item => !item.active).length === 0}
            >
              <Add />
            </IconButton>
            <Popover
              open={!!languageMenuAnchor}
              anchorEl={languageMenuAnchor}
              onClose={() => setLanguageMenuAnchor(null)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              classes={{
                paper: 'popover-shadow',
              }}
            >
              <div className="drop-down-root">
                <List>
                  <ListSubheader className="language-header">
                    {t('text_select_any_language_to_add')}
                  </ListSubheader>
                  {Object.keys(languageMap)?.map((item, index) => (
                    <ListItem
                      button
                      key={item}
                      onClick={() => {
                        handleAddLanguage(item, index);
                        setLanguageMenuAnchor(null);
                      }}
                    >
                      {languageMap[item].label}
                    </ListItem>
                  ))}
                </List>
              </div>
            </Popover>
          </Tabs>
          <div className="form-root">
            <div className="form-body">
              {Object.values(formConfig.fields).map(field => (
                <div key={field?.name} className={`span-${field?.span || 1}`}>
                  <FieldRenderer
                    renderer={field?.renderer}
                    props={selectionProp(field)}
                    required={field?.required}
                    label={errorLabel[field.name] || field?.label}
                    error={!!errorLabel[field.name]}
                    inValid={false}
                    value={getFieldValue(field?.name)}
                    onChange={handleFieldChange(field)}
                    disabled={fieldLanguage !== 0 && !field?.translated}
                  />
                </div>
              ))}
            </div>

            <div className="attribute-body">
              <span className="attribute-title"> {t('text_attributes')} </span>
              {data?.productsSize?.length ? (
                <div className="attribute-chips">
                  {normalizeClothColorSize()?.map(item => (
                    <Chip label={`${item.size} | ${item.color}` || 'N/A'} className="chip" />
                  ))}
                </div>
              ) : (
                <div className="d-flex attribute-chips">
                  <Chip label="N/A" className="chip" />
                </div>
              )}
            </div>

            <div className="form-footer product-save-btn">
              <Button
                variant="contained"
                color="primary"
                className="theme-btn save-btn"
                onClick={handleSave}
                disabled={productId !== 'create' && !isUpdated}
              >
                {t('text_save_details')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Product.propTypes = {
  addProduct: propTypes.func,
  updateProduct: propTypes.func,
  productDetails: propTypes.object,
  getProductDetails: propTypes.func,
  clearProductDetails: propTypes.func,
  getCategoryList: propTypes.func,
  notify: propTypes.func,
  categoryList: propTypes.object,
  location: propTypes.any,
  history: propTypes.any,
  match: propTypes.any,
};

export default Product;
