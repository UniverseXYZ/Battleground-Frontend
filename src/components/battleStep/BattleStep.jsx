import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './BattleStep.scss';
import leftsideBorder from '../../assets/images/battleStep/leftside_battle.png';
import rightideBorder from '../../assets/images/battleStep/rightside_battle.png';
import battleBoom from '../../assets/images/battleStep/battle-boom.png';

const BattleStep = () => {
  const history = useHistory();
  const [opponent, setOpponent] = useState(false);
  const [boom, setBoom] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpponent(true);
    }, 6000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    let timeout;

    if (opponent) {
      timeout = setTimeout(() => {
        setBoom(true);
        const randomPages = ['win', 'lose'];
        const goToRandomPage = randomPages[Math.floor(Math.random() * randomPages.length)];
        setTimeout(() => {
          if (goToRandomPage === 'win') {
            history.push('/battle-victory');
          } else {
            history.push('/battle-lose');
          }
        }, 2000);
      }, 6000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [opponent]);

  return (
    <div
      className={
        boom
          ? 'battlegrounds--section battle-step battle-boom'
          : 'battlegrounds--section battle-step'
      }
    >
      <div className="figher-side">
        <h1>You</h1>
        <p>0xe5A988952C02...a37198d0b6f2e6</p>
      </div>
      <div className="inside-border-div">
        <img src={leftsideBorder} alt="border-effect" className="left-border-effect" />
        <img src={rightideBorder} alt="border-effect" className="right-border-effect" />
      </div>
      <div className="opponent-side">
        <h1>Opponent</h1>
        <p>Looking for the opponent</p>
      </div>
      <div className="you-opponent">
        <div className="figher-img" />
        {boom && (
          <div className="battle-boom-img">
            <img src={battleBoom} alt="boom" />
          </div>
        )}
        <h1>VS</h1>
        <div className={opponent ? 'opponent-img have-opponent' : 'opponent-img'} />
      </div>
    </div>
  );
};
export default BattleStep;
