import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import attackIcon from '../../assets/images/icons/attack-icon.svg';
import defenceIcon from '../../assets/images/icons/defence-icon.svg';
import soundIcon from '../../assets/images/icons/sound-icon.svg';
import AttackButton from '../../components/button/attackButton/AttackButton';
import DefenceButton from '../../components/button/defenceButton/DefenceButton';
import Fighter from '../../components/chooseFighter/fighter/Fighter';
import FighterDescription from '../../components/chooseFighter/fighterDescription/FighterDescription';

const ChooseFighter = () => {
  const location = useLocation();
  const history = useHistory();
  const battleground = location.state ? location.state.battleground : null;

  return (
    <div className="choose__fighter" style={{ backgroundImage: `url(${battleground.background})` }}>
      <Fighter />
      <FighterDescription />
      <div className="fighter__buttons__tablet">
        <AttackButton
          icon={attackIcon}
          text="Attack"
          onClick={() => history.push('/battle-step')}
        />
        <DefenceButton
          icon={defenceIcon}
          text="Defence"
          onClick={() => history.push('/battle-step')}
        />
      </div>
      <div className="fighter__buttons__mobile">
        <AttackButton
          icon={attackIcon}
          text="Attack"
          onClick={() => history.push('/battle-step')}
        />
        <DefenceButton
          icon={defenceIcon}
          text="Defence"
          onClick={() => history.push('/battle-step')}
        />
      </div>
      <img src={soundIcon} alt="Audio" className="audio__icon" />
    </div>
  );
};

export default ChooseFighter;
