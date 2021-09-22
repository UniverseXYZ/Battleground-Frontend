import React from 'react';
import './Header.scss';
import Popup from 'reactjs-popup';
import GoBack from '../goBack/GoBack.jsx';
import Button from '../button/Button.jsx';
import appLogo from '../../assets/images/app-logo.png';
import connectWalletIcon from '../../assets/images/icons/plus.svg';
import SelectBattleWalletPopup from '../popups/SelectBattleWalletPopup';

const Header = () => (
  <header>
    <div className="back--btn">{/* <GoBack text="Home" /> */}</div>
    <div className="logo">
      <img src={appLogo} alt="App logo" />
    </div>
    <div className="connect--wallet--btn">
      <Popup
        trigger={
          <Button
            variant="secondary"
            text="Connect wallet"
            icon={connectWalletIcon}
            hideTextOnMobile
          />
        }
      >
        {(close) => <SelectBattleWalletPopup close={close} />}
      </Popup>
    </div>
  </header>
);

export default Header;
