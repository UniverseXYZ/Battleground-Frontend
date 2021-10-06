import React from 'react';
import PropTypes from 'prop-types';
import './BattlegroundCard.scss';
import eth from '../../assets/images/icons/eth-white-icon.svg';
import cutBorder from '../../assets/images/landingPage/cut-border-blue.png';
import cutBorderHover from '../../assets/images/battlegroundsPage/battleground-cut-border-hover.png';
import players from '../../assets/images/icons/players.svg';
import Button from '../button/Button';

const BattlegroundCard = ({ battleground }) => (
  <div className="battleground--card--section">
    <div className="battleground--card">
      <img src={cutBorder} alt="border-effect" className="left-top-border-effect" />
      <img src={cutBorder} alt="border-effect" className="bottom-right-border-effect" />
      <img
        src={cutBorderHover}
        alt="border-hover-effect"
        className="top-left-border-hover-effect"
      />
      <img
        src={cutBorderHover}
        alt="border-hover-effect"
        className="bottom-right-border-hover-effect"
      />
      <div className="battleground--card--body">
        <div className="online--users">
          <img src={players} alt="online-players" />
          <span>{battleground.players}</span>
        </div>
        <div className="wallet-bg">
          <img src={eth} alt="eth" />
          <h3>{battleground.price}</h3>
        </div>
        <div className="battlegrounds--image">
          <img src={battleground.background} alt={battleground.name} />
          <h1 className="battleground--name">{battleground.name}</h1>
          <div className="battleground--rewords">
            <span>Rewards:</span>
            <img src={eth} alt="eth" />
            <span>{battleground.rewards}</span>
          </div>
          <div className="slider-overlay" />
        </div>
        <div className="battleground--card--buttons">
          <Button variant="primary" text="Battle" />
          <Button variant="secondary" text="Claim" disabled={battleground.rewards === 0} />
        </div>
      </div>
    </div>
  </div>
);

BattlegroundCard.propTypes = {
  battleground: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default BattlegroundCard;
