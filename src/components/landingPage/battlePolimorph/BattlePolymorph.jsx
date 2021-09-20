import React from 'react';
import './BattlePolymorph.scss';
import battlePolymorphCharacters from '../../../assets/images/battle-your-polymorph-section.png';
import borderEffect from '../../../assets/images/cut-border.png';

const BattlePolymorph = () => (
  <div className="battle--your--polymorph">
    <div className="container battle--your--polymorph--section">
      <img className="top-left-bg" src={borderEffect} alt="border-effect" />
      <img className="bottom-right-bg" src={borderEffect} alt="border-effect" />
      <div className="battle--your--polymorph--desc">
        <h1 className="title">Battle your Polymorph</h1>
        <p>
          After your battleground has been selected your Polymorph will be entered into a unique
          Battle pool, where your rival will be randomly chosen.
        </p>
      </div>
      <div className="battle--your--polymorph--characters">
        <img src={battlePolymorphCharacters} alt="characters" />
      </div>
      <p className="desc-mobile">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip. Duis aute irure dolor quam diolor lorem sit.
      </p>
    </div>
  </div>
);

export default BattlePolymorph;
