import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './assets/scss/normalize.scss';
import AppContext from './ContextAPI';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import LandingPage from './containers/landingPage/LandingPage.jsx';

const App = () => {
  const location = useLocation();
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AppContext.Provider
      value={{
        isWalletConnected,
        setIsWalletConnected,
      }}
    >
      <Header />
      <Switch>
        <Route exact path="/" component={() => <LandingPage />} />
        <Route path="*" component={() => <LandingPage />} />
      </Switch>
      <Footer />
    </AppContext.Provider>
  );
};

export default App;
