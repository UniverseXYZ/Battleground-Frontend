import React from 'react';
import attackIcon from '../../assets/images/icons/attack-icon.svg';
import defenceIcon from '../../assets/images/icons/defence-icon.svg';
import Fighter from '../../components/chooseFighter/fighter/Fighter';
import FighterDescription from '../../components/chooseFighter/fighterDescription/FighterDescription';

const ChooseFighter = () => {
  const asd = '';
  return (
    <div className="choose__fighter">
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
    </div>
  );
};

export default ChooseFighter;
