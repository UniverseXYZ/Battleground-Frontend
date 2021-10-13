import React from 'react';
import { useLocation } from 'react-router';
import attackIcon from '../../assets/images/icons/attack-icon.svg';
import defenceIcon from '../../assets/images/icons/defence-icon.svg';
import soundIcon from '../../assets/images/icons/sound-icon.svg';
import Fighter from '../../components/chooseFighter/fighter/Fighter';
import FighterDescription from '../../components/chooseFighter/fighterDescription/FighterDescription';

const ChooseFighter = () => {
  const location = useLocation();
  const battleground = location.state ? location.state.battleground : null;

  return (
    <div className="choose__fighter" style={{ backgroundImage: `url(${battleground.background})` }}>
      <Fighter />
      <FighterDescription />
      <div className="fighter__buttons__tablet">
        <div className="attack__button__wrapper">
          <div className="primary__box__shadow">
            <button type="button">
              <img src={attackIcon} alt="Attack" /> Attack
            </button>
          </div>
        </div>
        <div className="defence__button__wrapper">
          <div className="primary__box__shadow">
            <button type="button">
              <img src={defenceIcon} alt="Defence" /> Defence
            </button>
          </div>
        </div>
      </div>
      <div className="fighter__buttons__mobile">
        <div className="attack__button__wrapper">
          <div className="primary__box__shadow">
            <button type="button">
              <img src={attackIcon} alt="Attack" /> Attack
            </button>
          </div>
        </div>
        <div className="defence__button__wrapper">
          <div className="primary__box__shadow">
            <button type="button">
              <img src={defenceIcon} alt="Defence" /> Defence
            </button>
          </div>
        </div>
      </div>
      <img src={soundIcon} alt="Audio" className="audio__icon" />
    </div>
  );
};

export default ChooseFighter;
