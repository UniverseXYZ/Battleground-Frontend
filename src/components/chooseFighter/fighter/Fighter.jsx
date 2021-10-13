import React from 'react';
import { Carousel } from '3d-react-carousal';
import Coverflow from 'react-coverflow';
import eth from '../../../assets/images/icons/eth-white-icon-small.svg';
import attackIcon from '../../../assets/images/icons/attack-icon.svg';
import defenceIcon from '../../../assets/images/icons/defence-icon.svg';
import DefenceButton from '../../button/defenceButton/DefenceButton';
import AttackButton from '../../button/attackButton/AttackButton';
import './Fighter.scss';

const Fighter = () => {
  const slides = [
    <img src="https://storage.googleapis.com/polymorph-images/190516033012210100.jpg" alt="1" />,
    <img src="https://storage.googleapis.com/polymorph-images/151221083106060007.jpg" alt="2" />,
    <img src="https://storage.googleapis.com/polymorph-images/141817010021040505.jpg" alt="3" />,
    <img src="https://storage.googleapis.com/polymorph-images/302805031331190308.jpg" alt="4" />,
    <img src="https://storage.googleapis.com/polymorph-images/240010060019140807.jpg" alt="5" />,
    <img src="https://storage.googleapis.com/polymorph-images/012310083012000600.jpg" alt="6" />,
    <img src="https://storage.googleapis.com/polymorph-images/021129101515240110.jpg" alt="7" />,
  ];

  return (
    <div className="fighter__div">
      <div className="eth__bid">
        <span>
          <img src={eth} alt="ETH" /> 1
        </span>
      </div>
      <div className="fighter__header">
        <div className="left--div" />
        <h1>Choose Fighter</h1>
        <div className="right--div" />
      </div>
      <p className="fighter__total">23 polymorphs total</p>
      <div className="fighter__slider">
        <Carousel
          slides={slides}
          goToSlide={0}
          offsetRadius={3}
          showNavigation
          autoplat
          interval={1000}
        />
      </div>
      <div className="fighter__buttons">
        <AttackButton icon={attackIcon} text="Attack" />
        <DefenceButton icon={defenceIcon} text="Defence" />
      </div>
    </div>
  );
};
export default Fighter;
