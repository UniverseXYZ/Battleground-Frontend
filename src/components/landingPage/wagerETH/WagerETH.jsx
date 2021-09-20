import React from 'react';
import './WagerETH.scss';
import Button from '../../button/Button';
import wagerImg from '../../../assets/images/wagerIllustration.png';

const WagerETH = () => (
  <div className="wagerETH-section">
    <div className="wager-img">
      <h1>Wager ETH</h1>
      <img src={wagerImg} alt="wager-img" />
    </div>
    <div className=" wagerETH-container">
      <h1>Wager ETH</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip. Duis aute irure dolor quam diolor lorem sit.
      </p>
    </div>
  </div>
);

export default WagerETH;
