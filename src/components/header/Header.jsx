import React, { useContext, useState, useRef } from 'react';
import './Header.scss';
import Popup from 'reactjs-popup';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useHistory } from 'react-router';
import AppContext from '../../ContextAPI';
import GoPreviousPage from '../goPreviousPage/GoPreviousPage.jsx';
import Button from '../button/Button.jsx';
import SelectWalletPopup from '../popups/selectWalletPopup/SelectWalletPopup.jsx';
import useOutsideClick from '../../utils/hooks/useOutsideClick.js';
import connectWalletIcon from '../../assets/images/icons/plus-icon.svg';
import myAccountIcon from '../../assets/images/icons/my-account-icon.svg';
import ethIcon from '../../assets/images/icons/eth-white-icon-small.svg';
import myPolymorphIcon from '../../assets/images/icons/my-polymorphs-icon.svg';
import myBattleHistoryIcon from '../../assets/images/icons/my-battles-history-icon.svg';
import signOutIcon from '../../assets/images/icons/sign-out-icon.svg';
import copyIcon from '../../assets/images/icons/copy-icon.svg';
import NoPolymorphFoundPopup from '../popups/noPolymorphFoundPopup/NoPolymorphFoundPopup';

const Header = () => {
  const { isWalletConnected, setIsWalletConnected, goPreviousPage } = useContext(AppContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef();
  const history = useHistory();
  const PLACEHOLDER_ETHEREUM_ADDRESS = '0x5493a5a6f...ef8b';
  const [copied, setCopied] = useState(false);
  const [showSelectWalletPopup, setShowSelectWalletPopup] = useState(false);

  useOutsideClick(ref, () => {
    setShowDropdown(false);
  });

  return (
    <header>
      <div className="back--btn">
        {goPreviousPage.text ? (
          <GoPreviousPage text={goPreviousPage.text} path={goPreviousPage.path} />
        ) : (
          <></>
        )}
      </div>
      <div className="logo-div">
        <div className="logo" onClick={() => history.push('/')} aria-hidden="true">
          <div className="background" />
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
                      <img src={ethIcon} alt="ETH" />
                    </div>
                    <div className="price">
                      <span>6,24 ETH</span>
                      <span className="converted">$10,554</span>
                    </div>
                  </div>
                </div>
                <div className="my--account--dropdown--bottom">
                  <div
                    className="link"
                    aria-hidden="true"
                    onClick={() => {
                      history.push('/my-polymorphs');
                      setShowDropdown(false);
                    }}
                  >
                    <img src={myPolymorphIcon} alt="My polymorphs" />
                    <span>My Polymorphs</span>
                  </div>
                  <div
                    className="link"
                    aria-hidden="true"
                    onClick={() => {
                      history.push('/my-battles-history');
                      setShowDropdown(false);
                    }}
                  >
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
            <Button
              variant="secondary"
              text="Connect wallet"
              icon={connectWalletIcon}
              hideTextOnMobile
              showIconOnMobileOnly
              onClick={() => setShowSelectWalletPopup(true)}
            />
            <Popup closeOnDocumentClick={false} modal lockScroll open={showSelectWalletPopup}>
              <NoPolymorphFoundPopup close={() => setShowSelectWalletPopup(false)} />
            </Popup>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
