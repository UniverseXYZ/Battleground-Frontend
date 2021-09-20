import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './GoBack.scss';
import goBackIcon from '../../assets/images/icons/go-back.svg';

const GoBack = ({ text }) => {
  const history = useHistory();
  return (
    <button className="go--back" type="button" onClick={() => history.goBack()}>
      <img src={goBackIcon} alt="Go back" />
      <span>{text}</span>
    </button>
  );
};

GoBack.propTypes = {
  text: PropTypes.string.isRequired,
};

export default GoBack;
