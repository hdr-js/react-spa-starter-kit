import React from 'react';
import propTypes from 'prop-types';

import * as formComponents from '../fields';

const DetailsViewFieldRenderer = ({ renderer, props, ...rest }) => {
  const Field = formComponents[renderer];
  return <Field {...rest} {...props} />;
};

DetailsViewFieldRenderer.propTypes = {
  renderer: propTypes.string,
  rest: propTypes.object,
  props: propTypes.object,
};

export default DetailsViewFieldRenderer;
