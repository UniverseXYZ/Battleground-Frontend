import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './GoBack.scss';
import goBackIcon from '../../assets/images/icons/go-back.svg';

const GoBack = ({ text, path }) => {
  const history = useHistory();
  return (
    <button className="go--back" type="button" onClick={() => history.push(path)}>
      <img src={goBackIcon} alt="Go back" />
      <span>{text}</span>
    </button>
  );
};

GoBack.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default GoBack;
