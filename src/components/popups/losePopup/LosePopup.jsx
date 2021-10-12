import React from 'react';
import './LosePopup.scss';
import PropTypes from 'prop-types';
import lose from '../../../assets/images/popup/losepopup.png';
import Button from '../../button/Button';
import closeIcon from '../../../assets/images/icons/close-icon.svg';
import subtractLeftIcon from '../../../assets/images/icons/subtract-left-icon.svg';
import subtractRightIcon from '../../../assets/images/icons/subtract-right-icon.svg';
import lineLeft from '../../../assets/images/popup/lineleft.png';
import lineRight from '../../../assets/images/popup/lineright.png';
import ethIcon from '../../../assets/images/icons/eth-white-icon-big.svg';

const LosePopup = ({ close, data }) => (
  <div className="lose-popup-container">
    <img className="border__img__left" src={subtractLeftIcon} alt="Subtract" />
    <img className="border__img__right" src={subtractRightIcon} alt="Subtract" />
    <div className="close__button__div" onClick={close} aria-hidden="true">
      <Button variant="primary" icon={closeIcon} />
    </div>
    <div className="lose-popup-border">
      <div className="lose-popup">
        <div className="header-section">
          <img src={lose} alt="win" />
        </div>
        <div className="score-section">
          <div className="score-box">
            <div className="fighter--image">
              <img src={data.me.image} alt="avatar" />
            </div>
            <div className="fighter--score">
              <h1>Your Score: {data.me.score}</h1>
            </div>
            <div className="fighter--info--box">
              <div>
                <p>Wallet:</p>
                <h3>{`${data.me.eth_address.substring(0, 8)}...`}</h3>
              </div>
              <div>
                <p>Choice:</p>
                <h3>{data.me.choice}</h3>
              </div>
              <div>
                <p>Attack:</p>
                <h3>{data.me.attack}</h3>
              </div>
            </div>
          </div>
          <div className="score-box">
            <div className="fighter--image">
              <img src={data.opponent.image} alt="avatar" />
            </div>
            <div className="fighter--score">
              <h1>Opponent’s Score: {data.opponent.score}</h1>
            </div>
            <div className="fighter--info--box">
              <div>
                <p>Wallet:</p>
                <h3>{`${data.opponent.eth_address.substring(0, 8)}...`}</h3>
              </div>
              <div>
                <p>Choice:</p>
                <h3>{data.opponent.choice}</h3>
              </div>
              <div>
                <p>Defence:</p>
                <h3>{data.opponent.defence}</h3>
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
          <h1>{data.rewards}</h1>
        </div>
      </div>
    </div>
  </div>
);
LosePopup.propTypes = {
  close: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
export default LosePopup;
