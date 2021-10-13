import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../button/Button.jsx';
import './NoPolymorphFoundPopup.scss';
import PopupContainer from '../PopupContainer.jsx';

const NoPolymorphFoundPopup = ({ close }) => (
  <PopupContainer close={close} additionalClass="no--polymorph--found">
    <div className="no--polymorph--found--popup">
      <h1 className="title">You don’t have any Polymorphs yet</h1>
      <p className="desc">
        You need to have at least one Polymorph to be entered into a unique Battle pool
      </p>
      <div className="popup__actions">
        <Button variant="primary" text="Go to Marketplace" />
        <Button variant="secondary" text="Back" onClick={close} />
      </div>
    </div>
  </PopupContainer>
);

NoPolymorphFoundPopup.propTypes = {
  close: PropTypes.func.isRequired,
};

export default NoPolymorphFoundPopup;
