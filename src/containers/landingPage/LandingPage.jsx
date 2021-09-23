import React, { useState, useEffect } from 'react';
import HeroSection from '../../components/landingPage/heroSection/HeroSection';
import BattlePolymorph from '../../components/landingPage/battlePolimorph/BattlePolymorph';
import HowToPlay from '../howToPlay/HowToPlay';
import WagerETH from '../../components/landingPage/wagerETH/WagerETH';
import Battlegrounds from '../../components/landingPage/BattlegroundsSection/Battlegrounds';
import Loading from '../../components/loading/Loading.jsx';

const LandingPage = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 6000);
  }, []);

  return (
    <div>
      {showLoading && <Loading />}
      <HeroSection />
      <BattlePolymorph />
      <WagerETH />
      <HowToPlay />
      <Battlegrounds />
    </div>
  );
};

export default LandingPage;
