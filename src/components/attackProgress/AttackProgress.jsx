import React from 'react';
import attackIcon from '../../assets/images/icons/attack-image.svg';
import './AttackProgress.scss';

const AttackProgress = () => (
  <div className="fighter__desc__attack">
    <img src={attackIcon} alt="Attack" />
    <div className="attack__div">
      <div className="attack__head">
        <p>Attack</p>
        <p>150-240</p>
      </div>
      <div className="attack__bar">
        <div className="fill__transparent">
          <div className="filled" />
        </div>
      </div>
    </div>
  </div>
);

export default AttackProgress;
