import React from 'react';
import './WinPopup.scss';
import PropTypes from 'prop-types';
import win from '../../../assets/images/popup/win-min.png';
import lineLeft from '../../../assets/images/popup/lineleft.png';
import lineRight from '../../../assets/images/popup/lineright.png';
import ethIcon from '../../../assets/images/icons/eth-white-icon-big.svg';
import PopupContainer from '../PopupContainer';

const WinPopup = ({ close, data }) => (
  <PopupContainer close={close} additionalClass="win">
    <div className="win--popup">
      <div className="header-section">
        <img src={win} alt="win" />
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
  </PopupContainer>
);
WinPopup.propTypes = {
  close: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
export default WinPopup;
