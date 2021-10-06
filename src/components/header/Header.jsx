import React, { useContext, useState, useRef } from 'react';
import './Header.scss';
import Popup from 'reactjs-popup';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useHistory } from 'react-router';
import AppContext from '../../ContextAPI';
import GoBack from '../goBack/GoBack.jsx';
import Button from '../button/Button.jsx';
import SelectWalletPopup from '../popups/selectWalletPopup/SelectWalletPopup.jsx';
import useOutsideClick from '../../utils/hooks/useOutsideClick.js';
import appLogo from '../../assets/images/landingPage/battle-universe.svg';
import connectWalletIcon from '../../assets/images/icons/plus.svg';
import myAccountIcon from '../../assets/images/icons/my-account-icon.svg';
import eth from '../../assets/images/icons/eth-white-icon.svg';
import myPolymorphIcon from '../../assets/images/icons/my-polymorphs.svg';
import myBattleHistoryIcon from '../../assets/images/icons/my-battles-history.svg';
import signOutIcon from '../../assets/images/icons/sign-out.svg';
import copyIcon from '../../assets/images/icons/copy.svg';

const Header = () => {
  const { isWalletConnected, setIsWalletConnected } = useContext(AppContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef();
  const history = useHistory();
  const PLACEHOLDER_ETHEREUM_ADDRESS = '0x5493a5a6f...ef8b';
  const [copied, setCopied] = useState(false);

  useOutsideClick(ref, () => {
    setShowDropdown(false);
  });

  return (
    <header>
      <div className="back--btn">{/* <GoBack text="Home" /> */}</div>
      <div className="logo-div">
        <div className="logo" onClick={() => history.push('/')} aria-hidden="true">
          <div className="background">{/* <img src={appLogo} alt="App logo" /> */}</div>
        </div>
        <div className="left" />
        <div className="right" />
        <div className="down" />
      </div>
      <div className="connect--wallet--btn">
        {isWalletConnected ? (
          <div className="wallet--connected" ref={ref}>
            <Button
              variant="secondary"
              text="My account"
              icon={myAccountIcon}
              hideTextOnMobile
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown ? (
              <div className="my--account--dropdown">
                <div className="my--account--dropdown--top">
                  <div className="my--account--address">
                    <div className="icon">
                      <img src={myAccountIcon} alt="My account" />
                    </div>
                    <div className="address">{PLACEHOLDER_ETHEREUM_ADDRESS}</div>
                    <div className="copy--to--clipboard">
                      <CopyToClipboard
                        text={PLACEHOLDER_ETHEREUM_ADDRESS}
                        onCopy={() => {
                          setCopied(true);
                          setTimeout(() => {
                            setCopied(false);
                          }, 1000);
                        }}
                      >
                        <span>
                          <img src={copyIcon} alt="Copy to clipboard icon" className="copyImg" />
                        </span>
                      </CopyToClipboard>
                    </div>
                  </div>
                  <div className="my--account--price">
                    <div className="icon">
                      <img src={eth} alt="ETH" />
                    </div>
                    <div className="price">
                      <span>6,24 ETH</span>
                      <span className="converted">$10,554</span>
                    </div>
                  </div>
                </div>
                <div className="my--account--dropdown--bottom">
                  <div className="link">
                    <img src={myPolymorphIcon} alt="My polymorphs" />
                    <span>My Polymorphs</span>
                  </div>
                  <div className="link">
                    <img src={myBattleHistoryIcon} alt="My battles history" />
                    <span>My battles history</span>
                  </div>
                  <div
                    className="link signout"
                    aria-hidden="true"
                    onClick={() => {
                      setIsWalletConnected(false);
                      setShowDropdown(false);
                    }}
                  >
                    <img src={signOutIcon} alt="Sign out" />
                    <span>Sign out</span>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div>
            <Popup
              trigger={
                <Button
                  variant="secondary"
                  text="Connect wallet"
                  icon={connectWalletIcon}
                  hideTextOnMobile
                  showIconOnMobileOnly
                />
              }
              modal
              lockScroll
            >
              {(close) => <SelectWalletPopup close={close} />}
            </Popup>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
