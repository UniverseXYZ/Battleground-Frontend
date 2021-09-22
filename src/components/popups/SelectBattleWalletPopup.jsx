import React, { useState } from 'react';
import PropTypes from 'prop-types';
import metamaskLogo from '../../assets/images/metamask-logo.png';
import ledgerLogo from '../../assets/images/ledger-logo.png';
import portisLogo from '../../assets/images/portis-logo.png';
import trezorLogo from '../../assets/images/trezor-logo.png';
import coinbaseLogo from '../../assets/images/coinbase-logo.png';
import walletConnectLogo from '../../assets/images/walletconnect-logo.png';
import subtractLeft from '../../assets/images/icons/subtract-left.svg';
import subtractRight from '../../assets/images/icons/subtract-right.svg';
import closeIcon from '../../assets/images/icons/cross.svg';
import './PopupStyles.scss';

const SelectBattleWalletPopup = ({ close }) => {
  const [variable, setVariable] = useState();
  return (
    <div className="select__battle__wallet__container">
      <img className="border__img__left" src={subtractLeft} alt="Subtract" />
      <img className="border__img__right" src={subtractRight} alt="Subtract" />
      <div className="close__button__div" onClick={close} aria-hidden="true">
        <div className="close__button__color">
          <img src={closeIcon} alt="Close" />
        </div>
      </div>
      <div className="select__battle__wallet__popup__border">
        <div className="select__battle__wallet__popup">
          <h1>Select wallet</h1>
          <p className="wallet__text">Please pick a wallet to connect to Battle Universe</p>
          <div className="wallets">
            <div className="wallet__border">
              <div className="wallet__item">
                <img src={metamaskLogo} alt="Metamask" />
              </div>
            </div>
            <div className="wallet__border">
              <div className="wallet__item">
                <img src={ledgerLogo} alt="Ledger" />
              </div>
            </div>
            <div className="wallet__border">
              <div className="wallet__item">
                <img src={portisLogo} alt="Portis" />
              </div>
            </div>
            <div className="wallet__border">
              <div className="wallet__item">
                <img src={trezorLogo} alt="Trezor" />
              </div>
            </div>
            <div className="wallet__border">
              <div className="wallet__item">
                <img src={coinbaseLogo} alt="Coinbase" />
              </div>
            </div>
            <div className="wallet__border">
              <div className="wallet__item">
                <img src={walletConnectLogo} alt="Wallet Connect" />
              </div>
            </div>
          </div>
          <p className="wallet__desc">
            We do not own your private keys and cannot access your funds without your confirmation.
          </p>
        </div>
      </div>
    </div>
  );
};

SelectBattleWalletPopup.propTypes = {
  close: PropTypes.func.isRequired,
};
export default SelectBattleWalletPopup;