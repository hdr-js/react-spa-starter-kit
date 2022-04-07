import React from 'react';
import propTypes from 'prop-types';

import * as formComponents from '../fields';

const FieldRenderer = ({ renderer, props, ...rest }) => {
  const Field = formComponents[renderer];
  return <Field {...rest} {...props} />;
};

FieldRenderer.propTypes = {
  renderer: propTypes.string,
  rest: propTypes.object,
  props: propTypes.object,
};

export default FieldRenderer;
