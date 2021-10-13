import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import AttackProgress from '../../attackProgress/AttackProgress';
import DefenseProgress from '../../defenseProgress/DefenseProgress';
import fighterImage from '../../../assets/images/polymorph-fighter-little.png';
import subtractLeft from '../../../assets/images/icons/subtract-left-icon.svg';
import subtractRight from '../../../assets/images/icons/subtract-right-icon.svg';
import arrowUp from '../../../assets/images/icons/arrow-up.svg';
import vIcon from '../../../assets/images/icons/v-icon.svg';
import './FighterDescription.scss';
import WinPopup from '../../popups/winPopup/WinPopup';
import LosePopup from '../../popups/losePopup/LosePopup';
import BattleHistoryTable from '../../tables/battleHostoryTable/BattleHistoryTable';
import { MyBattlesHistoryDummyData } from '../../../utils/fixtures/MyBattlesHistoryDummyData.js';

const FighterDescription = () => {
  const [fightsHistory, setFightsHystory] = useState([
    { opponent: '0x000mark...', result: 'win', ammount: 1 },
    { opponent: '0x000mark...', result: 'lose', ammount: 1 },
    { opponent: '0x000mark...', result: 'lose', ammount: 1 },
    { opponent: '0x000mark...', result: 'win', ammount: 1 },
    { opponent: '0x000mark...', result: 'win', ammount: 1 },
    { opponent: '0x000mark...', result: 'win', ammount: 1 },
  ]);
  const [mobileShow, setMobileShow] = useState(false);
  const [showLosePopup, setShowLosePopup] = useState(false);
  const [showWinPopup, setShowWinPopup] = useState(false);

  return (
    <div
      className={
        mobileShow ? 'fighter__description__wrapper mobile' : 'fighter__description__wrapper'
      }
    >
      <img className="left--wrapper" src={subtractLeft} alt="Left" />
      <img className="right--wrapper" src={subtractRight} alt="Right" />
      <img
        className="open__close"
        src={arrowUp}
        alt="arrow"
        onClick={() => setMobileShow(!mobileShow)}
        aria-hidden="true"
        style={mobileShow ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }}
      />
      <div className="fighter__description">
        <div className="main__part">
          <div className="fighter__description__header">
            <div className="fighter__image__div">
              <img className="fighter__image" src={fighterImage} alt="Fighter" />
              <img className="v__icon" src={vIcon} alt="V" />
            </div>
            <h3 className="title">Glenn #4422</h3>
          </div>
          <AttackProgress />
          <DefenseProgress />
          <div className="fights__statistics">
            <div className="statistics">
              <h2>8</h2>
              <p>Fights won</p>
            </div>
            <div className="statistics">
              <h2>6</h2>
              <p>ETH won</p>
            </div>
            <div className="statistics">
              <h2>+2</h2>
              <p>ETH (+/-)</p>
            </div>
          </div>
        </div>
        <BattleHistoryTable data={MyBattlesHistoryDummyData} />
      </div>
      <Popup modal lockScroll open={showWinPopup} closeOnDocumentClick={false}>
        <WinPopup close={() => setShowWinPopup(false)} />
      </Popup>
      <Popup modal lockScroll open={showLosePopup} closeOnDocumentClick={false}>
        <LosePopup close={() => setShowLosePopup(false)} />
      </Popup>
    </div>
  );
};

export default FighterDescription;
