import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './assets/scss/normalize.scss';
import AppContext from './ContextAPI';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import LandingPage from './containers/landingPage/LandingPage.jsx';
import Battlegrounds from './containers/battlegrounds/Battlegrounds';
import MyPolymorphs from './containers/myPolymorphs/MyPolymorphs';

const App = () => {
  const location = useLocation();
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [goPreviousPage, setGoPreviousPage] = useState({ text: '', path: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
    switch (location.pathname) {
      case '/':
        setGoPreviousPage({ text: '', path: null });
        break;
      case '/battlegrounds':
        setGoPreviousPage({ text: 'Home', path: '/' });
        break;
      default:
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
          <Route path="*" component={() => <LandingPage />} />
        </Switch>
      </div>
      <Footer />
    </AppContext.Provider>
  );
};

export default App;
