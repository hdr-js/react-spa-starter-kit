import React from 'react';
import propTypes from 'prop-types';

import * as cellComponents from '../cells';
import Loader from '../../Loader';

const CellRenderer = ({ renderer, props, isLoading, ...rest }) => {
  const Cell = cellComponents[renderer];
  return isLoading ? (
    <span className="stat-loader">
      <Loader variant="orderTableCell" />
    </span>
  ) : (
    <Cell {...rest} {...props} />
  );
};

CellRenderer.propTypes = {
  renderer: propTypes.string,
  isLoading: propTypes.bool,
  rest: propTypes.object,
  props: propTypes.object,
};

export default CellRenderer;
