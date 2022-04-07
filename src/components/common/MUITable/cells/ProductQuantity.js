import React from 'react';
import propTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';

const ProductQuantity = ({ value: { value, onChange, disabled } }) => {
  return (
    <Tooltip
      classes={{
        tooltip: 'capitalize',
      }}
      title={value || ''}
      placement="bottom"
      enterDelay={100}
    >
      <TextField
        inputProps={{ style: { textAlign: 'right' } }}
        size="small"
        margin="dense"
        type="number"
        className="number-field"
        variant="outlined"
        color="primary"
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    </Tooltip>
  );
};

ProductQuantity.propTypes = {
  value: propTypes.any,
  variant: propTypes.string,
  highlighted: propTypes.bool,
};

export default ProductQuantity;
