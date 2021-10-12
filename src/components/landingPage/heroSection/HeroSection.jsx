import React from 'react';
import './HeroSection.scss';
import { useHistory } from 'react-router-dom';
import Button from '../../button/Button';
import soundIcon from '../../../assets/images/icons/sound-icon.svg';

const HeroSection = () => {
  const history = useHistory();
  return (
    <div className="hero-section">
      <div className="container hero-section-container">
        <h1>Polymorphic Battle Universe</h1>
        <p>Wager ETH and go head to head with other Polymorph owners in the Universe.</p>
        <div className="battle-button-section">
          <Button
            variant="primary"
            text="Battle now"
            onClick={() => {
              history.push('/battlegrounds');
            }}
          />
        </div>
      </div>
      <div className="audio-icon">
        <img src={soundIcon} alt="sound" />
      </div>
    </div>
  );
};
export default HeroSection;
