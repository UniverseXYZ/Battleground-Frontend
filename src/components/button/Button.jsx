import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ variant, icon, children, ...restProps }) => (
  <button className={variant} type="button" {...restProps}>
    {icon && <img src={icon} alt="icon" style={{ marginRight: children ? '11px' : '0' }} />}
    {children}
  </button>
);

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  icon: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

Button.defaultProps = {
  icon: null,
};

export default Button;
