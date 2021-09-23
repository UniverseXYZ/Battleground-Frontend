import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = React.forwardRef(
  ({ variant, icon, text, hideTextOnMobile, showIconOnMobileOnly, ...restProps }, ref) => {
    const classNames = restProps.className;
    delete restProps.className;
    return (
      <div className="button--wrapper">
        <div className={`primary-box-shadow${variant === 'primary' ? ' opacity' : ''}`} />
        <button
          className={`${classNames || ''} ${variant}${
            hideTextOnMobile ? ' hide--text--on--mobile' : ''
          }`}
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
};

Button.defaultProps = {
  icon: null,
  text: null,
  hideTextOnMobile: false,
  showIconOnMobileOnly: false,
};

export default Button;
