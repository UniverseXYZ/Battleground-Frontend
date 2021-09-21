import React from 'react';
import './Header.scss';
import GoBack from '../goBack/GoBack.jsx';
import Button from '../button/Button.jsx';
import appLogo from '../../assets/images/app-logo.png';
import connectWalletIcon from '../../assets/images/icons/plus.svg';

const Header = () => (
  <header>
    <div className="back--btn">{/* <GoBack text="Home" /> */}</div>
    <div className="logo">
      <img src={appLogo} alt="App logo" />
    </div>
    <div className="connect--wallet--btn">
      <Button variant="secondary" text="Connect wallet" icon={connectWalletIcon} hideTextOnMobile />
    </div>
  </header>
);

export default Header;
