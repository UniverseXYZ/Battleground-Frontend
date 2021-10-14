import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './BattleVictoryPage.scss';
import borderLine from '../../assets/images/victoryLosePage/reword-border-line.png';
import myPolymorphImg from '../../assets/images/polymorphCard/polymorphCardImg7.png';
import opponentPolymorphImg from '../../assets/images/polymorphCard/polymorphCardImg2.png';
import ethIcon from '../../assets/images/icons/eth-white-icon-big.svg';
import Button from '../../components/button/Button';

const BattleVictoryPage = () => {
  const [copied, setCopied] = useState(false);

  return (
    <div className="victory--page">
      <div className="container">
        <div className="victory--page--header">
          <h1 className="title">Victory!</h1>
        </div>
        <div className="victory--page--cards--section">
          <div className="my--victory--card">
            <div className="my--victory--card--content">
              <div className="polymorph--img">
                <img src={myPolymorphImg} alt="polymorph-card" />
              </div>
              <div className="my--victory--card--options">
                <h3>Your Score: 34</h3>
                <div className="details">
                  <div className="wallet">
                    <p>Wallet:</p>
                    <CopyToClipboard
                      text="0x88f107857b9046a07c06d36566b661edd2993e0b"
                      onCopy={() => {
                        setCopied(true);
                        setTimeout(() => {
                          setCopied(false);
                        }, 1000);
                      }}
                    >
                      <p>
                        {`${`0x88f107857b9046a07c06d36566b661edd2993e0b`.substring(0, 7)}...`}
                        {copied ? (
                          <span className="tooltiptext">Copied to the clipboard</span>
                        ) : (
                          <></>
                        )}
                      </p>
                    </CopyToClipboard>
                  </div>
                  <div className="choice">
                    <p>Choice:</p>
                    <p>Attack</p>
                  </div>
                  <div className="attack">
                    <p>Attack:</p>
                    <p>189</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opponent--victory--card">
            <div className="opponent--victory--card--content">
              <div className="polymorph--img">
                <img src={opponentPolymorphImg} alt="polymorph-card" />
              </div>
              <div className="opponent--victory--card--options">
                <h3>Opponent’s Score: 28</h3>
                <div className="details">
                  <div className="wallet">
                    <p>Wallet:</p>
                    <CopyToClipboard
                      text="0x88f107857b9046a07c06d36566b661edd2993e0b"
                      onCopy={() => {
                        setCopied(true);
                        setTimeout(() => {
                          setCopied(false);
                        }, 1000);
                      }}
                    >
                      <p>
                        {`${`0x88f107857b9046a07c06d36566b661edd2993e0b`.substring(0, 7)}...`}
                        {copied ? (
                          <span className="tooltiptext">Copied to the clipboard</span>
                        ) : (
                          <></>
                        )}
                      </p>
                    </CopyToClipboard>
                  </div>
                  <div className="choice">
                    <p>Choice:</p>
                    <p>Defence</p>
                  </div>
                  <div className="attack">
                    <p>Attack:</p>
                    <p>160</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="victory--page--rewords">
          <div className="rewords--title">
            <img src={borderLine} className="left-line" alt="border-line" />
            <h1>rewords</h1>
            <img src={borderLine} className="right-line" alt="border-line" />
          </div>
          <div className="rewords--content">
            <img src={ethIcon} alt="eth" />
            <h1>10</h1>
          </div>
        </div>
      </div>
      <div className="victory--buttons--section">
        <button type="button" className="battlegrounds--button">
          Battlegrounds
        </button>
        <Button variant="primary" text="Play again" />
      </div>
      <div className="victory--bg--effect" />
    </div>
  );
};

export default BattleVictoryPage;
