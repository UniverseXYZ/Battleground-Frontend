import React from 'react';
import HeroSection from '../../components/landingPage/heroSection/HeroSection';
import BattlePolymorph from '../../components/landingPage/battlePolimorph/BattlePolymorph';
import HowToPlay from '../howToPlay/HowToPlay';
import WagerETH from '../../components/landingPage/wagerETH/WagerETH';
import Battlegrounds from '../../components/landingPage/BattlegroundsSection/Battlegrounds';
import Loading from '../../components/loading/Loading.jsx';

const LandingPage = () => (
  <div>
    <HeroSection />
    <BattlePolymorph />
    <WagerETH />
    <HowToPlay />
    <Battlegrounds />
    <Loading />
  </div>
);

export default LandingPage;
