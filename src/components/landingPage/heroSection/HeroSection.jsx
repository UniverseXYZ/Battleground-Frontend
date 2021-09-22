import React from 'react';
import './HeroSection.scss';
import Button from '../../button/Button';
import icon2 from '../../../assets/images/icons/icon.svg';

const HeroSection = () => (
  <div className="hero-section">
    <div className="container hero-section-container">
      <h1>Polymorphic Battle Universe</h1>
      <p>Wager ETH and go head to head with other Polymorph owners in the Universe.</p>
      <div className="battle-button-section">
        <Button variant="primary" text="Battle now" />
      </div>
    </div>
    <div className="audio-icon">
      <img src={icon2} alt="icon" />
    </div>
  </div>
);
export default HeroSection;
