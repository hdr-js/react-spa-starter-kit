import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

const Validator = ({ variant, message, persist, onVanish, timer }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!persist) {
      setTimeout(() => {
        setIsVisible(false);
        onVanish();
      }, timer);
    }
  }, [message]);

  return (
    <div className="validator-text d-flex">
      {isVisible ? <span className={`${variant}-message`}>{message}</span> : null}
    </div>
  );
};

Validator.propTypes = {
  variant: propTypes.string,
  message: propTypes.string,
  state: propTypes.bool,
  persist: propTypes.bool,
  messageHandler: propTypes.func,
  onVanish: propTypes.func,
  timer: propTypes.number,
};

export default Validator;
