import React from 'react';
import PropTypes from 'prop-types';
import attackIcon from '../../../assets/images/icons/attack-icon.svg';
import './AttackButton.scss';

const AttackButton = ({ icon, text, ...restProps }) => (
  <div className="attack__button__wrapper">
    <div className="primary__box__shadow">
      <button type="button" {...restProps}>
        <img src={icon} alt="Attack" /> {text}
      </button>
    </div>
  </div>
);

AttackButton.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AttackButton;
