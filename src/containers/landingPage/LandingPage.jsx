import React from 'react';
import HeroSection from '../../components/landingPage/heroSection/HeroSection';
import BattlePolymorph from '../../components/landingPage/battlePolymorphSection/BattlePolymorph';
import HowToPlay from '../../components/landingPage/howToPlaySection/HowToPlay';
import WagerETH from '../../components/landingPage/wagerETHSection/WagerETH';
import Battlegrounds from '../../components/landingPage/BattlegroundsSection/Battlegrounds';

const LandingPage = () => (
  <div>
    <HeroSection />
    <BattlePolymorph />
    <WagerETH />
    <HowToPlay />
    <Battlegrounds />
  </div>
);
export default LandingPage;
