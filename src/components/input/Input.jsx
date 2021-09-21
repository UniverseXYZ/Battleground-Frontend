import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({ cornerColor, ...restProps }) => (
  <div className="input--wrapper" style={{ background: cornerColor }}>
    <input {...restProps} />
  </div>
);

Input.propTypes = {
  cornerColor: PropTypes.string.isRequired,
};

export default Input;
