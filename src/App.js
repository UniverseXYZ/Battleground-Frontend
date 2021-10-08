import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './assets/scss/normalize.scss';
import AppContext from './ContextAPI';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import LandingPage from './containers/landingPage/LandingPage.jsx';
import Loading from './components/loading/Loading';
import Battlegrounds from './containers/battlegrounds/Battlegrounds';

const App = () => {
  const location = useLocation();
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [goBack, setGoBack] = useState({ text: '', path: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AppContext.Provider
      value={{
        isWalletConnected,
        setIsWalletConnected,
        goBack,
        setGoBack,
      }}
    >
      {showLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={() => <LandingPage />} />
              <Route exact path="/battlegrounds" component={() => <Battlegrounds />} />
              <Route path="*" component={() => <LandingPage />} />
            </Switch>
          </div>
          <Footer />
        </>
      )}
    </AppContext.Provider>
  );
};

export default App;
