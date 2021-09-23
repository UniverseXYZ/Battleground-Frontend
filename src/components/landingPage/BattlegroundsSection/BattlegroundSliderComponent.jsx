import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './SliderComponent.scss';
import uuid from 'react-uuid';
import eth from '../../../assets/images/icons/eth-white-icon.svg';
import cutBorder from '../../../assets/images/landingPage/cut-border-blue.png';
import { BattlegroundsDummyData } from '../../../utils/fixtures/BattlegroundsDummyData';

const BattlegroundSliderComponent = () => {
  const [sliderWidth, setSliderWidth] = useState(540);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    variableWidth: true,
  };
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSliderWidth(252);
      } else if (window.innerWidth < 1024) {
        setSliderWidth(408);
      } else {
        setSliderWidth(540);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ pointerEvents: 'none' }}>
      <Slider {...settings}>
        {BattlegroundsDummyData.map((item) => (
          <div className="slider-borders" key={uuid()}>
            <img src={cutBorder} alt="border-effect" className="left-top-border-effect" />
            <img src={cutBorder} alt="border-effect" className="bottom-right-border-effect" />
            <div style={{ width: sliderWidth }} className="slider-item">
              <div className="wallet-bg">
                <img src={eth} alt="eth" />
                <h3>{item.price}</h3>
              </div>
              <img src={item.background} alt="Slider 1" />
              <h1 className="battleground-name">{item.name}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default BattlegroundSliderComponent;
