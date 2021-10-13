import React from 'react';
import PropTypes from 'prop-types';
import './DefenceButton.scss';

const DefenceButton = ({ icon, text }) => (
  <div className="defence__button__wrapper">
    {console.log('aaaaaaaaaaaa', icon)}
    <div className="primary__box__shadow">
      <button type="button">
        <img src={icon} alt="Defence" /> {text}
      </button>
    </div>
  </div>
);

DefenceButton.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default DefenceButton;
