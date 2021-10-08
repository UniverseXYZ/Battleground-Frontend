import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './GoPreviousPage.scss';
import goPreviousPageIcon from '../../assets/images/icons/go-previous-page-icon.svg';

const GoPreviousPage = ({ text, path }) => {
  const history = useHistory();
  return (
    <button className="go--previous--page" type="button" onClick={() => history.push(path)}>
      <img src={goPreviousPageIcon} alt="Go previous page" />
      <span>{text}</span>
    </button>
  );
};

GoPreviousPage.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default GoPreviousPage;
