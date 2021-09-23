import React, { useState, useEffect } from 'react';
import battlegroundImg from '../../../assets/images/loading/battleground.png';
import fighterImg from '../../../assets/images/loading/fighter.png';
import battleImg from '../../../assets/images/loading/battle.png';
import rewardImg from '../../../assets/images/loading/claim-rewards.png';
import './HowToPlay.scss';

const HowToPlay = () => {
  const [firstContentOpened, setFirstContentOpened] = useState(false);
  const [secondContentOpened, setSecondContentOpened] = useState(false);
  const [thirdContentOpened, setThirdContentOPened] = useState(false);
  const [forthContentOpened, setForthContentOpened] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (document.querySelectorAll('.play__content__item__body')) {
        const elems = document.querySelectorAll('.play__content__item__body');
        elems.forEach((el, i) => {
          el.style.animationDuration = '.5s';
        });
      }
    }, 500);
  }, []);

  return (
    <div className="how__to__play">
      <div className="container">
        <h1>How to play</h1>
        <div className="play__content">
          <div
            className="play__content__item"
            onClick={() => setFirstContentOpened(!firstContentOpened)}
            aria-hidden="true"
          >
            <div className={`play__content__item__header ${firstContentOpened ? 'active' : ''}`}>
              <h2>1. Choose battleground</h2>
              <div className="toggle">
                <span className="horizontal" />
                {!firstContentOpened && <span className="vertical" />}
              </div>
            </div>
            <div className={`play__content__item__body ${firstContentOpened ? 'open' : ''}`}>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus eu tempor sapien
                fringilla ultricies ut nunc id. A blandit donec integer augue purus malesuada ac.
                Magna consectetur vehicula rutrum elementum sapien rhoncus magna. Vulputate a,
                adipiscing nec praesent bibendum molestie. Non consequat vitae ac volutpat sed
                nulla.
              </p>
              <img src={battlegroundImg} alt="Battleground" />
            </div>
          </div>
          <div
            className="play__content__item"
            onClick={() => setSecondContentOpened(!secondContentOpened)}
            aria-hidden="true"
          >
            <div className={`play__content__item__header ${secondContentOpened ? 'active' : ''}`}>
              <h2>2. Choose a fighter</h2>
              <div className="toggle">
                <span className="horizontal" />
                {!secondContentOpened && <span className="vertical" />}
              </div>
            </div>
            <div className={`play__content__item__body ${secondContentOpened ? 'open' : ''}`}>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus eu tempor sapien
                fringilla ultricies ut nunc id. A blandit donec integer augue purus malesuada ac.
                Magna consectetur vehicula rutrum elementum sapien rhoncus magna.
              </p>
              <img src={fighterImg} alt="Fighter" />
            </div>
          </div>
          <div
            className="play__content__item"
            onClick={() => setThirdContentOPened(!thirdContentOpened)}
            aria-hidden="true"
          >
            <div className={`play__content__item__header ${thirdContentOpened ? 'active' : ''}`}>
              <h2>3. Battle</h2>
              <div className="toggle">
                <span className="horizontal" />
                {!thirdContentOpened && <span className="vertical" />}
              </div>
            </div>
            <div className={`play__content__item__body ${thirdContentOpened ? 'open' : ''}`}>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus eu tempor sapien
                fringilla ultricies ut nunc id. A blandit donec integer augue purus malesuada ac.
                Magna consectetur vehicula rutrum elementum sapien rhoncus magna.
              </p>
              <img src={battleImg} alt="Battle" />
            </div>
          </div>
          <div
            className="play__content__item"
            onClick={() => setForthContentOpened(!forthContentOpened)}
            aria-hidden="true"
          >
            <div className={`play__content__item__header ${forthContentOpened ? 'active' : ''}`}>
              <h2>4. Claim rewards</h2>
              <div className="toggle">
                <span className="horizontal" />
                {!forthContentOpened && <span className="vertical" />}
              </div>
            </div>
            <div className={`play__content__item__body ${forthContentOpened ? 'open' : ''}`}>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus eu tempor sapien
                fringilla ultricies ut nunc id. A blandit donec integer augue purus malesuada ac.
                Magna consectetur vehicula rutrum elementum sapien rhoncus magna.
              </p>
              <img src={rewardImg} alt="Reward" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
