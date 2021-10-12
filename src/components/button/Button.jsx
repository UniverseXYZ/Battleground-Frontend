import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = React.forwardRef(
  (
    { variant, icon, text, hideTextOnMobile, showIconOnMobileOnly, disabled, ...restProps },
    ref
  ) => {
    const classNames = restProps.className;
    delete restProps.className;
    return (
      <div className={`button--wrapper${disabled ? ' disabled' : ''}`}>
        <div className={`primary-box-shadow${variant === 'primary' ? ' opacity' : ''}`} />
        <button
          className={`${classNames || ''} ${variant}${
            hideTextOnMobile ? ' hide--text--on--mobile' : ''
          }`}
          type="button"
          disabled={disabled}
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
        </button>
      </div>
    );
  }
);

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  icon: PropTypes.string,
  text: PropTypes.string,
  hideTextOnMobile: PropTypes.bool,
  showIconOnMobileOnly: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  icon: null,
  text: null,
  hideTextOnMobile: false,
  showIconOnMobileOnly: false,
  disabled: false,
};

export default Button;
