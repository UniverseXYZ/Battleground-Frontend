import React from 'react';
import HeroSection from '../../components/landingPage/heroSection/HeroSection';
import BattlePolymorph from '../../components/landingPage/battlePolimorph/BattlePolymorph';
import HowToPlay from '../howToPlay/HowToPlay';
import WagerETH from '../../components/landingPage/wagerETH/WagerETH';

const LandingPage = () => (
  <div>
    <HeroSection />
    <BattlePolymorph />
    <WagerETH />
    <HowToPlay />
  </div>
);

export default LandingPage;
