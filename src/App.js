import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './assets/scss/normalize.scss';
import AppContext from './ContextAPI';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import LandingPage from './containers/landingPage/LandingPage.jsx';
import Battlegrounds from './containers/battlegrounds/Battlegrounds.jsx';
import MyPolymorphs from './containers/myPolymorphs/MyPolymorphs.jsx';
import ChooseFighter from './containers/chooseFighter/ChooseFighter.jsx';
import PolymorphPage from './containers/polymorphPage/PolymorphPage.jsx';
import MyBattlesHistory from './containers/myBattlesHistory/MyBattlesHistory.jsx';
import BattleVictoryPage from './containers/battleVictoryPage/BattleVictoryPage';
import BattleLosePage from './containers/battleLosePage/BattleLosePage';
import BattleStep from './components/battleStep/BattleStep';

const App = () => {
  const location = useLocation();
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [goPreviousPage, setGoPreviousPage] = useState({ text: '', path: '' });
  const [hideFooter, setHideFooter] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    switch (location.pathname) {
      case '/':
        setHideFooter(false);
        setGoPreviousPage({ text: '', path: null });
        break;
      case '/battlegrounds':
        setHideFooter(false);
        setGoPreviousPage({ text: 'Home', path: '/' });
        break;
      case '/choose-fighter':
        setHideFooter(true);
        setGoPreviousPage({ text: 'Battlegrounds', path: '/battlegrounds' });
        break;
      case '/battle-victory':
        setHideFooter(true);
        break;
      case '/battle-lose':
        setHideFooter(true);
        break;
      case '/battle-step':
        setHideFooter(true);
        setGoPreviousPage({ text: '', path: '/' });
        break;
      default:
        setHideFooter(false);
        setGoPreviousPage({ text: '', path: '/' });
    }
  }, [location]);

  return (
    <AppContext.Provider
      value={{
        isWalletConnected,
        setIsWalletConnected,
        goPreviousPage,
        setGoPreviousPage,
      }}
    >
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={() => <LandingPage />} />
          <Route exact path="/battlegrounds" component={() => <Battlegrounds />} />
          <Route exact path="/my-polymorphs" component={() => <MyPolymorphs />} />
          <Route exact path="/polymorph/:id" component={() => <PolymorphPage />} />
          <Route exact path="/my-battles-history" component={() => <MyBattlesHistory />} />
          <Route exact path="/choose-fighter" component={() => <ChooseFighter />} />
          <Route exact path="/battle-step" component={() => <BattleStep />} />
          <Route exact path="/battle-victory" component={() => <BattleVictoryPage />} />
          <Route exact path="/battle-lose" component={() => <BattleLosePage />} />
          <Route path="*" component={() => <LandingPage />} />
        </Switch>
      </div>
      {!hideFooter && <Footer />}
    </AppContext.Provider>
  );
};

export default App;
