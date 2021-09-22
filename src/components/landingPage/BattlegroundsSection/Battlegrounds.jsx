import React from 'react';
import './Battlegrounds.scss';
import Button from '../../button/Button';
import BattlegroundSliderComponent from './BattlegroundSliderComponent';

const Battlegrounds = () => (
  <div className="battlegrounds--section">
    <h1 className="title">Battlegrounds</h1>
    <BattlegroundSliderComponent />
    <div className="battlegrounds--button--section">
      <Button variant="primary" text="Battle now" />
    </div>
  </div>
);
export default Battlegrounds;
