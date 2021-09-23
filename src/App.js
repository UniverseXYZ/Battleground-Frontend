import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './assets/scss/normalize.scss';
import AppContext from './ContextAPI';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import LandingPage from './containers/landingPage/LandingPage.jsx';
import Loading from './components/loading/Loading';

const App = () => {
  const location = useLocation();
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 6000);
  }, []);

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
      {showLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={() => <LandingPage />} />
            <Route path="*" component={() => <LandingPage />} />
          </Switch>
          <Footer />
        </>
      )}
    </AppContext.Provider>
  );
};

export default App;
