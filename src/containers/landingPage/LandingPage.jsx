import React from 'react';
import HeroSection from '../../components/landingPage/heroSection/HeroSection';
import HowToPlay from '../howToPlay/HowToPlay';
import WagerETH from '../../components/landingPage/wagerETH/WagerETH';

const LandingPage = () => (
  <div>
    <HeroSection />
    <WagerETH />
    <HowToPlay />
  </div>
);

export default LandingPage;
