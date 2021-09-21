import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import './SliderComponent.scss';
import sliderImage2 from '../../../assets/images/landingPage/battleground-item-2.png';
import sliderImage1 from '../../../assets/images/landingPage/battleground-item-1.png';
import sliderImage3 from '../../../assets/images/landingPage/battleground-item-3.png';
import eth from '../../../assets/images/landingPage/eth-white-icon.svg';
import cutBorder from '../../../assets/images/landingPage/cut-border-blue.png';

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
        <div style={{ width: sliderWidth }} className="slider-item">
          <img src={cutBorder} alt="border-effect" className="left-top-border-effect" />
          <div className="wallet-bg">
            <img src={eth} alt="eth" />
            <h3>0.5</h3>
          </div>
          <img src={sliderImage1} alt="Slider 1" />
          <h1 className="battleground-name">Colyseum</h1>
          <img src={cutBorder} alt="border-effect" className="bottom-right-border-effect" />
        </div>
        <div style={{ width: sliderWidth }} className="slider-item">
          <img src={cutBorder} alt="border-effect" className="left-top-border-effect" />
          <div className="wallet-bg">
            <img src={eth} alt="eth" />
            <h3>0.5</h3>
          </div>
          <img src={sliderImage2} alt="Slider 2" />
          <h1 className="battleground-name">Alley way</h1>
          <img src={cutBorder} alt="border-effect" className="bottom-right-border-effect" />
        </div>
        <div style={{ width: sliderWidth }} className="slider-item">
          <img src={cutBorder} alt="border-effect" className="left-top-border-effect" />
          <div className="wallet-bg">
            <img src={eth} alt="eth" />
            <h3>0.5</h3>
          </div>
          <img src={sliderImage3} alt="Slider 3" />
          <h1 className="battleground-name">Practise room</h1>
          <img src={cutBorder} alt="border-effect" className="bottom-right-border-effect" />
        </div>
      </Slider>
    </div>
  );
};
export default BattlegroundSliderComponent;
