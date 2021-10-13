import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import './BattleHistoryTable.scss';
import LosePopup from '../../popups/losePopup/LosePopup';
import WinPopup from '../../popups/winPopup/WinPopup';

const BattleHistoryTable = ({ data }) => {
  const [showLosePopup, setShowLosePopup] = useState(false);
  const [showWinPopup, setShowWinPopup] = useState(false);
  const [selectedHistory, setSelectedHistory] = useState(null);
  return (
    <div className="fight__history">
      <h2>Fight history</h2>
      <table className="hystory__list">
        <thead>
          <th>Opponent</th>
          <th className="win-lose">Win/Loss</th>
          <th>Wager Amount</th>
        </thead>
        <tbody>
          <div className="line" />
          <div style={{ marginBottom: '10px' }} />
          {data.map((elem) => (
            <tr
              key={elem.id}
              area-hidden="true"
              onClick={() => {
                // eslint-disable-next-line no-unused-expressions
                elem.status === 'win' ? setShowWinPopup(true) : setShowLosePopup(true);
                setSelectedHistory(elem);
              }}
            >
              <td className="opponent">{`${elem.opponent.eth_address.substring(0, 10)}...`}</td>
              <td className="win__loss">
                <div className={elem.status}>{elem.status}</div>
              </td>
              <td className="wager__amount">{elem.rewards} ETH</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Popup closeOnDocumentClick={false} open={showLosePopup} lockScroll>
        <LosePopup close={() => setShowLosePopup(false)} data={selectedHistory} />
      </Popup>
      <Popup closeOnDocumentClick={false} open={showWinPopup} lockScroll>
        <WinPopup close={() => setShowWinPopup(false)} data={selectedHistory} />
      </Popup>
    </div>
  );
};
BattleHistoryTable.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default BattleHistoryTable;
