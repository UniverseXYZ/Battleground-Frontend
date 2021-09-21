import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import leftShape from '../../assets/images/secondary-button-left.png';
import rightShape from '../../assets/images/secondary-button-right.png';

const Button = ({ variant, icon, text, hideTextOnMobile, showIconOnMobileOnly, ...restProps }) => {
  const classNames = restProps.className;
  delete restProps.className;
  return (
    <button
      className={`${classNames} ${variant}${hideTextOnMobile ? ' hide--text--on--mobile' : ''}`}
      type="button"
      {...restProps}
    >
      {icon && (
        <img
          className={`icon${showIconOnMobileOnly ? ' show--on--mobile--only' : ''}`}
          style={{ marginRight: text ? '11px' : '0px' }}
          src={icon}
          alt="icon"
        />
      )}
      <span>{text}</span>
      {variant === 'secondary' && (
        <>
          <img className="left--shape" src={leftShape} alt="left shape" />
          <img className="right--shape" src={rightShape} alt="right shape" />
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  hideTextOnMobile: PropTypes.bool,
  showIconOnMobileOnly: PropTypes.bool,
};

Button.defaultProps = {
  icon: null,
  hideTextOnMobile: false,
  showIconOnMobileOnly: false,
};

export default Button;
