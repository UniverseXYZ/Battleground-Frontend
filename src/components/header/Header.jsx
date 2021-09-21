import React, { useContext } from 'react';
import './Header.scss';
import AppContext from '../../ContextAPI';
import GoBack from '../goBack/GoBack.jsx';
import Button from '../button/Button.jsx';
import appLogo from '../../assets/images/app-logo.png';
import connectWalletIcon from '../../assets/images/icons/plus.svg';
import myAccountIcon from '../../assets/images/icons/my-account-icon.svg';

const Header = () => {
  const { isWalletConnected, setIsWalletConnected } = useContext(AppContext);
  return (
    <header>
      <div className="back--btn">{/* <GoBack text="Home" /> */}</div>
      <div className="logo">
        <img src={appLogo} alt="App logo" />
      </div>
      <div className="connect--wallet--btn">
        {isWalletConnected ? (
          <div>
            <Button
              variant="secondary"
              text="My account"
              icon={myAccountIcon}
              hideTextOnMobile
              onClick={() => setIsWalletConnected(false)}
            />
          </div>
        ) : (
          <div>
            <Button
              variant="secondary"
              text="Connect wallet"
              icon={connectWalletIcon}
              hideTextOnMobile
              showIconOnMobileOnly
              onClick={() => setIsWalletConnected(true)}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
