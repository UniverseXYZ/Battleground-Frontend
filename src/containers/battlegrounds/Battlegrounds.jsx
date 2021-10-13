import React from 'react';
import BattlegroundCard from '../../components/battlegroundCard/BattlegroundCard';
import './Battlegrounds.scss';
import { BattlegroundsDummyData } from '../../utils/fixtures/BattlegroundsDummyData';
import soundIcon from '../../assets/images/icons/sound-icon.svg';

const Battlegrounds = () => (
  <div className="battlegrounds--page">
    <div className="audio-icon">
      <img src={soundIcon} alt="icon" />
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
