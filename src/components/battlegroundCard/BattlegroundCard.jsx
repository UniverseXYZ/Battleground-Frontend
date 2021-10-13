import React from 'react';
import PropTypes from 'prop-types';
import './BattlegroundCard.scss';
import { useHistory } from 'react-router-dom';
import ethIcon from '../../assets/images/icons/eth-white-icon-small.svg';
import cutBorder from '../../assets/images/landingPage/cut-border-blue.png';
import cutBorderHover from '../../assets/images/battlegroundsPage/battleground-cut-border-hover.png';
import playersIcon from '../../assets/images/icons/players-icon.svg';
import Button from '../button/Button';

const BattlegroundCard = ({ battleground }) => {
  const history = useHistory();
  return (
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
            <img src={playersIcon} alt="online-players" />
            <span>{battleground.players}</span>
          </div>
          <div className="wallet-bg">
            <img src={ethIcon} alt="eth" />
            <h3>{battleground.price}</h3>
          </div>
          <div className="battlegrounds--image">
            <img src={battleground.background} alt={battleground.name} />
            <h1 className="battleground--name">{battleground.name}</h1>
            <div className="battleground--rewords">
              <span>Rewards:</span>
              <img src={ethIcon} alt="eth" />
              <span>{battleground.rewards}</span>
            </div>
            <div className="slider-overlay" />
          </div>
          <div className="battleground--card--buttons">
            <Button
              variant="primary"
              text="Battle"
              onClick={() => history.push('/choose-fighter', { battleground })}
            />
            <Button variant="secondary" text="Claim" disabled={battleground.rewards === 0} />
          </div>
        </div>
      </div>
    </div>
  );
};

BattlegroundCard.propTypes = {
  battleground: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default BattlegroundCard;
