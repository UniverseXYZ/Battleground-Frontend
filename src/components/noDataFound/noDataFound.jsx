import React from 'react';
import PropTypes from 'prop-types';
import './noDataFound.scss';
import { useHistory } from 'react-router-dom';
import bubleIcon from '../../assets/images/icons/text-bubble.png';
import Button from '../button/Button.jsx';

const NoDataFound = ({ title, desc, btnText, btnAction }) => {
  const history = useHistory();
  return (
    <div className="empty__data">
      <img src={bubleIcon} alt="Buble" />
      <h3>{title}</h3>
      <p className="desc">{desc}</p>
      <Button
        variant="primary"
        text={btnText}
        // onClick={() => {
        //   history.push(btnAction);
        // }}
      />
    </div>
  );
};

NoDataFound.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  btnAction: PropTypes.string.isRequired,
};

export default NoDataFound;
