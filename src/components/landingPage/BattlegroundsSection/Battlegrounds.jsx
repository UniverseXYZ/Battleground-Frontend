import React from 'react';
import './Battlegrounds.scss';
import { useHistory } from 'react-router-dom';
import Button from '../../button/Button';
import BattlegroundSliderComponent from './BattlegroundSliderComponent';

const Battlegrounds = () => {
  const history = useHistory();
  return (
    <div className="battlegrounds--section">
      <h1 className="title">Battlegrounds</h1>
      <BattlegroundSliderComponent />
      <div className="battlegrounds--button--section">
        <Button
          variant="primary"
          text="Battle now"
          onClick={() => {
            history.push('/battlegrounds');
          }}
        />
      </div>
    </div>
  );
};
export default Battlegrounds;
