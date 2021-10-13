import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button.jsx';
import './PopupContainer.scss';
import closeIcon from '../../assets/images/icons/close-icon.svg';
import subtractLeftIcon from '../../assets/images/icons/subtract-left-icon.svg';
import subtractRightIcon from '../../assets/images/icons/subtract-right-icon.svg';

const PopupContainer = ({ close, children, additionalClass }) => (
  <div className="popup__container">
    <img className="border__img__left" src={subtractLeftIcon} alt="Subtract" />
    <img className="border__img__right" src={subtractRightIcon} alt="Subtract" />
    <div className="close__button" onClick={close} aria-hidden="true">
      <Button variant="primary" icon={closeIcon} />
    </div>
    <div className="popup__border">
      <div className={`popup ${additionalClass}`}>{children}</div>
    </div>
  </div>
);

PopupContainer.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  additionalClass: PropTypes.string,
};

PopupContainer.defaultProps = {
  additionalClass: '',
};

export default PopupContainer;
