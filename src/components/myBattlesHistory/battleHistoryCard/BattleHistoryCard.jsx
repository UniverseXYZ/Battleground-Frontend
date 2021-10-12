import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';
import LosePopup from '../../popups/losePopup/LosePopup.jsx';
import WinPopup from '../../popups/winPopup/WinPopup.jsx';
import './BattleHistoryCard.scss';
import ethIcon from '../../../assets/images/icons/eth-white-icon-small.svg';

const BattleHistoryCard = ({ data }) => {
  const [showLosePopup, setShowLosePopup] = useState(false);
  const [showWinPopup, setShowWinPopup] = useState(false);

  return (
    <div
      className={`battle--history--card ${data.status === 'win' ? 'win' : 'lose'}`}
      aria-hidden="true"
      onClick={() => (data.status === 'win' ? setShowWinPopup(true) : setShowLosePopup(true))}
    >
      <div className="polymorph">
        <div className="polymorph--image">
          <img src={data.me.image} alt="Polymorph" />
        </div>
        <div className="polymorph--info">
          <h4>Your score: {data.me.score}</h4>
          <p>{`${data.me.eth_address.substring(0, 10)}...`}</p>
        </div>
      </div>
      <div className="tooltip">Win</div>
      <div className="price">
        <img src={ethIcon} alt="ETH" />
        <span>{data.rewards}</span>
      </div>
      <div className="date">{data.date}</div>
      <div className="polymorph opponent">
        <div className="polymorph--info">
          <h4>Opponent’s score: {data.opponent.score}</h4>
          <p>{`${data.opponent.eth_address.substring(0, 10)}...`}</p>
        </div>
        <div className="polymorph--image">
          <img src={data.opponent.image} alt="Polymorph" />
        </div>
      </div>
      <Popup closeOnDocumentClick={false} open={showLosePopup} lockScroll>
        <LosePopup close={() => setShowLosePopup(false)} data={data} />
      </Popup>
      <Popup closeOnDocumentClick={false} open={showWinPopup} lockScroll>
        <WinPopup close={() => setShowWinPopup(false)} data={data} />
      </Popup>
    </div>
  );
};

BattleHistoryCard.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default BattleHistoryCard;
