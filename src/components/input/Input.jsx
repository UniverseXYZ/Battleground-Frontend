import React from 'react';
import './Input.scss';

const Input = ({ ...restProps }) => (
  <div className="input--wrapper">
    <input {...restProps} />
  </div>
);

export default Input;
