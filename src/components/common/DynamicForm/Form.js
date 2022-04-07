import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import FieldRenderer from './FieldRenderer';
import { askConfirmation } from '../../../ducks/confirmation/actions';
import './dynamic-form.scss';
import './dynamic-input.scss';

const Form = ({ initialValues, renderConfig, onUpdate }) => {
  const [changed, setChanged] = React.useState({});
  const requiredFields = [];

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleFieldChange = field => ({ target: { value } }) => {
    setChanged({
      ...changed,
      [field]: value,
    });
  };

  const handleSaveChanges = () => {
    dispatch(
      askConfirmation({
        message: t('text_Are_you_sure_you_want_to_save_the_changes'),
        callback: response => {
          if (response) {
            onUpdate(changed);
            setChanged({});
          }
        },
      }),
    );
  };

  return (
    <div className="form-root">
      <div className={`form-body ${`form-cols-${renderConfig.cols}`}`}>
        {renderConfig.fields.map(field => {
          const { renderer, props, name, required, label } = field;
          const fieldValue = changed[name]?.length >= 0 ? changed[name] : initialValues[name];
          if (required) {
            requiredFields.push(name);
          }

          return (
            <FieldRenderer
              renderer={renderer}
              props={{ ...props }}
              key={name}
              required={required}
              label={t(label)}
              inValid={false}
              value={fieldValue}
              onChange={handleFieldChange(name)}
            />
          );
        })}
      </div>
      <div className="form-actions">
        <Button
          className="theme-btn"
          classes={{
            disabled: 'disabled-btn',
          }}
          variant="contained"
          color="primary"
          disabled={!Object.keys(changed).length}
          onClick={handleSaveChanges}
        >
          {t('text_save_details')}
        </Button>
      </div>
    </div>
  );
};

Form.propTypes = {
  initialValues: propTypes.object,
  onUpdate: propTypes.func,
  askConfirmation: propTypes.func,
  renderConfig: propTypes.object,
  updateResponse: propTypes.object,
  readOnly: propTypes.bool,
  isLoading: propTypes.bool,
  t: propTypes.func,
};

export default Form;
