import React from 'react';
import defenceIcon from '../../assets/images/icons/defence-image.svg';
import './DefenseProgress.scss';

const DefenseProgress = () => (
  <div className="fighter__desc__defence">
    <img src={defenceIcon} alt="Defence" />
    <div className="defence__div">
      <div className="defence__head">
        <p>Defence</p>
        <p>250-300</p>
      </div>
      <div className="defence__bar">
        <div className="fill__transparent">
          <div className="filled" />
        </div>
      </div>
    </div>
  </div>
);

export default DefenseProgress;
