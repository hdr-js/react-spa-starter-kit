import React from 'react';
import propTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { withTranslation } from 'react-i18next';
import FieldRenderer from './FieldRenderer';

class DetailsViewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      renderValues: {},
    };
  }

  componentDidMount() {
    const { initialValues } = this.props;
    this.setState(prevState => ({
      editable: !prevState.editable,
      renderValues: !prevState.editable ? initialValues : {},
    }));
  }

  handleFieldChange = field => ({ target: { value } }) => {
    this.setState(prevState => ({
      renderValues: {
        ...prevState.renderValues,
        [field]: value,
      },
    }));
  };

  handleSaveChanges = () => {
    const { onUpdate } = this.props;
    const { renderValues } = this.state;
    onUpdate(renderValues);
  };

  render() {
    const { renderConfig, initialValues, readOnly, isLoading, t } = this.props;
    const { editable, renderValues } = this.state;
    const values = editable || isLoading ? renderValues : initialValues;

    return (
      <div className="form-root">
        <div className={`buddy-form-container ${`grid-cols-${renderConfig.cols}`}`}>
          {renderConfig.fields.map(field => {
            const { renderer, props, name, size, required, label } = field;
            return (
              <div className="details-view-field-margin">
                <FieldRenderer
                  renderer={renderer}
                  props={{ ...props }}
                  key={name}
                  size={size}
                  disabled={!editable}
                  required={required}
                  label={t(label)}
                  inValid={false}
                  value={values[name]}
                  onChange={this.handleFieldChange(name)}
                />
              </div>
            );
          })}
        </div>
        {!readOnly && (
          <div className="buddy-actions">
            {editable && (
              <Button
                onClick={this.handleSaveChanges}
                className="save-changes-button"
                color="primary"
                variant="contained"
              >
                {editable && t('text_save_settings')}
              </Button>
            )}
          </div>
        )}
      </div>
    );
  }
}

DetailsViewForm.propTypes = {
  onUpdate: propTypes.func,
  t: propTypes.func,
  initialValues: propTypes.object,
  renderConfig: propTypes.object,
  isLoading: propTypes.object,
  readOnly: propTypes.object,
  enableEdit: propTypes.object,
  updateResponse: propTypes.object,
};

export default withTranslation()(DetailsViewForm);
