import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import metamaskLogo from '../../../assets/images/popup/metamask-logo.png';
import ledgerLogo from '../../../assets/images/popup/ledger-logo.png';
import portisLogo from '../../../assets/images/popup/portis-logo.png';
import trezorLogo from '../../../assets/images/popup/trezor-logo.png';
import coinbaseLogo from '../../../assets/images/popup/coinbase-logo.png';
import walletConnectLogo from '../../../assets/images/popup/walletconnect-logo.png';
import './SelectWalletPopup.scss';
import AppContext from '../../../ContextAPI';
import PopupContainer from '../PopupContainer';

const SelectWalletPopup = ({ close }) => {
  const { setIsWalletConnected } = useContext(AppContext);

  return (
    <PopupContainer close={close}>
      <div className="select__battle__wallet__popup">
        <h1>Select wallet</h1>
        <p className="wallet__text">Please pick a wallet to connect to Battle Universe</p>
        <div className="wallets">
          <div
            className="wallet__border"
            aria-hidden="true"
            onClick={() => {
              setIsWalletConnected(true);
              close();
              document.querySelector('body').style.overflow = 'auto';
            }}
          >
            <div className="wallet__item">
              <img src={metamaskLogo} alt="Metamask" />
            </div>
          </div>
          <div
            className="wallet__border"
            aria-hidden="true"
            onClick={() => {
              setIsWalletConnected(true);
              close();
              document.querySelector('body').style.overflow = 'auto';
            }}
          >
            <div className="wallet__item">
              <img src={ledgerLogo} alt="Ledger" />
            </div>
          </div>
          <div
            className="wallet__border"
            aria-hidden="true"
            onClick={() => {
              setIsWalletConnected(true);
              close();
              document.querySelector('body').style.overflow = 'auto';
            }}
          >
            <div className="wallet__item">
              <img src={portisLogo} alt="Portis" />
            </div>
          </div>
          <div
            className="wallet__border"
            aria-hidden="true"
            onClick={() => {
              setIsWalletConnected(true);
              close();
              document.querySelector('body').style.overflow = 'auto';
            }}
          >
            <div className="wallet__item">
              <img src={trezorLogo} alt="Trezor" />
            </div>
          </div>
          <div
            className="wallet__border"
            aria-hidden="true"
            onClick={() => {
              setIsWalletConnected(true);
              close();
              document.querySelector('body').style.overflow = 'auto';
            }}
          >
            <div className="wallet__item">
              <img src={coinbaseLogo} alt="Coinbase" />
            </div>
          </div>
          <div
            className="wallet__border"
            aria-hidden="true"
            onClick={() => {
              setIsWalletConnected(true);
              close();
              document.querySelector('body').style.overflow = 'auto';
            }}
          >
            <div className="wallet__item">
              <img src={walletConnectLogo} alt="Wallet Connect" />
            </div>
          </div>
        </div>
        <p className="wallet__desc">
          We do not own your private keys and cannot access your funds without your confirmation.
        </p>
      </div>
    </PopupContainer>
  );
};

SelectWalletPopup.propTypes = {
  close: PropTypes.func.isRequired,
};
export default SelectWalletPopup;
