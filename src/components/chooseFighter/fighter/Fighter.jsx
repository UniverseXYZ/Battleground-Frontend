import React, { useState } from 'react';
import Slider from 'react-slick';
import { Carousel } from '3d-react-carousal';
import Coverflow from 'react-coverflow';
import uuidv4 from 'react-uuid';
import eth from '../../../assets/images/icons/eth-white-icon.svg';
import fighterImage from '../../../assets/images/polymorph-fighter.png';
import attackIcon from '../../../assets/images/icons/attack-icon.svg';
import defenceIcon from '../../../assets/images/icons/defence-icon.svg';
import './Fighter.scss';

const Fighter = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showNavigation, setShowNavigation] = useState(true);
  const slides = [
    <img src="https://storage.googleapis.com/polymorph-images/190516033012210100.jpg" alt="1" />,
    <img src="https://storage.googleapis.com/polymorph-images/151221083106060007.jpg" alt="2" />,
    <img src="https://storage.googleapis.com/polymorph-images/141817010021040505.jpg" alt="3" />,
    <img src="https://storage.googleapis.com/polymorph-images/302805031331190308.jpg" alt="4" />,
    <img src="https://storage.googleapis.com/polymorph-images/240010060019140807.jpg" alt="5" />,
    <img src="https://storage.googleapis.com/polymorph-images/012310083012000600.jpg" alt="6" />,
    <img src="https://storage.googleapis.com/polymorph-images/141817010021040505.jpg" alt="7" />,
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
        {/* <Carousel
          slides={slides}
          goToSlide={0}
          offsetRadius={offsetRadius}
          showNavigation
          autoplat
          interval={1000}
        /> */}
        <Coverflow
          displayQuantityOfSide={3}
          navigation
          enableScroll
          enableHeading={false}
          clickable
          active={0}
        >
          <img
            src="https://storage.googleapis.com/polymorph-images/190516033012210100.jpg"
            alt="1"
            style={{
              display: 'block',
              width: '100%',
            }}
          />
          <img
            src="https://storage.googleapis.com/polymorph-images/151221083106060007.jpg"
            alt="2"
            data-action="http://andyyou.github.io/react-coverflow/"
          />
          <img
            src="https://storage.googleapis.com/polymorph-images/141817010021040505.jpg"
            alt="3"
            data-action="http://andyyou.github.io/react-coverflow/"
          />
          <img
            src="https://storage.googleapis.com/polymorph-images/302805031331190308.jpg"
            alt="4"
            data-action="http://andyyou.github.io/react-coverflow/"
          />
          <img
            src="https://storage.googleapis.com/polymorph-images/240010060019140807.jpg"
            alt="5"
            data-action="http://andyyou.github.io/react-coverflow/"
          />
          <img
            src="https://storage.googleapis.com/polymorph-images/012310083012000600.jpg"
            alt="6"
            data-action="http://andyyou.github.io/react-coverflow/"
          />
          <img
            src="https://storage.googleapis.com/polymorph-images/141817010021040505.jpg"
            alt="title or description"
            data-action="http://andyyou.github.io/react-coverflow/"
          />
        </Coverflow>
      </div>
      <div className="fighter__buttons">
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
export default Fighter;
