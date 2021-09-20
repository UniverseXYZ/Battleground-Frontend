import React from 'react';
import HeroSection from '../../components/landingPage/heroSection/HeroSection';
import BattlePolymorph from '../../components/landingPage/battlePolimorph/BattlePolymorph';
import HowToPlay from '../howToPlay/HowToPlay';

const LandingPage = () => (
  <div>
    <HeroSection />
    <BattlePolymorph />
    <HowToPlay />
  </div>
);

export default LandingPage;
