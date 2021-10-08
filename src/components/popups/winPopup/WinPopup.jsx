import React from 'react';
import './WinPopup.scss';
import PropTypes from 'prop-types';
import win from '../../../assets/images/popup/win-min.png';
import fighterAvatar1 from '../../../assets/images/popup/fighter1.png';
import fighterAvatar2 from '../../../assets/images/popup/fighter2.png';
import Button from '../../button/Button';
import closeIcon from '../../../assets/images/icons/cross.svg';
import subtractLeft from '../../../assets/images/icons/subtract-left.svg';
import subtractRight from '../../../assets/images/icons/subtract-right.svg';
import lineLeft from '../../../assets/images/popup/lineleft.png';
import lineRight from '../../../assets/images/popup/lineright.png';
import ethIcon from '../../../assets/images/popup/ethicon.svg';

const WinPopup = ({ close }) => (
  <div className="win-popup-container">
    <img className="border__img__left" src={subtractLeft} alt="Subtract" />
    <img className="border__img__right" src={subtractRight} alt="Subtract" />
    <div className="close__button__div" onClick={close} aria-hidden="true">
      <Button variant="primary" icon={closeIcon} />
    </div>
    <div className="win-popup-border">
      <div className="win-popup">
        <div className="header-section">
          <img src={win} alt="win" />
        </div>
        <div className="score-section">
          <div className="score-box">
            <div className="fighter--image">
              <img src={fighterAvatar1} alt="avatar" />
            </div>
            <div className="fighter--score">
              <h1>Your Score: 34</h1>
            </div>
            <div className="fighter--info--box">
              <div>
                <p>Wallet:</p>
                <h3>0xd17dw...</h3>
              </div>
              <div>
                <p>Choice:</p>
                <h3>Attack</h3>
              </div>
              <div>
                <p>Attack:</p>
                <h3>189</h3>
              </div>
            </div>
          </div>
          <div className="score-box">
            <div className="fighter--image">
              <img src={fighterAvatar2} alt="avatar" />
            </div>
            <div className="fighter--score">
              <h1>Opponent’s Score: 28</h1>
            </div>
            <div className="fighter--info--box">
              <div>
                <p>Wallet:</p>
                <h3>0xd17dw...</h3>
              </div>
              <div>
                <p>Choice:</p>
                <h3>Defence</h3>
              </div>
              <div>
                <p>Attack:</p>
                <h3>160</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="popup-reward-section">
          <div>
            <img src={lineLeft} alt="line" />
          </div>
          <div className="reward">
            <h1>REWARDS</h1>
          </div>
          <div>
            <img src={lineRight} alt="line" />
          </div>
        </div>
        <div className="popup-footer-section">
          <img src={ethIcon} alt="icon" />
          <h1>10</h1>
        </div>
      </div>
    </div>
  </div>
);
WinPopup.propTypes = {
  close: PropTypes.func.isRequired,
};
export default WinPopup;
