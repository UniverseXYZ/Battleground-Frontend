import React from 'react';
import BattlegroundCard from '../../components/battlegroundCard/BattlegroundCard';
import './Battlegrounds.scss';
import { BattlegroundsDummyData } from '../../utils/fixtures/BattlegroundsDummyData';
import icon2 from '../../assets/images/icons/icon.svg';

const Battlegrounds = () => (
  <div className="battlegrounds--section">
    <div className="audio-icon">
      <img src={icon2} alt="icon" />
    </div>
    <div className="container">
      <div className="battlegrounds--title">
        <h1>Battlegrounds</h1>
        <p>Battle against other Polymoprhs</p>
      </div>
      <div className="battlegrounds">
        {BattlegroundsDummyData.map((battleground) => (
          <BattlegroundCard key={battleground.id} battleground={battleground} />
        ))}
      </div>
    </div>
  </div>
);

export default Battlegrounds;
