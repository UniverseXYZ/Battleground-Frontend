import React, { useState } from 'react';
import ItemsPerPageDropdown from '../../components/dropdowns/itemsPerPageDropdown/ItemsPerPageDropdown';
import BattleHistoryCard from '../../components/myBattlesHistory/battleHistoryCard/BattleHistoryCard';
import Statistics from '../../components/myBattlesHistory/Statistics';
import Pagination from '../../components/pagination/Pagination';
import { MyBattlesHistoryDummyData } from '../../utils/fixtures/MyBattlesHistoryDummyData';
import './MyBattlesHistory.scss';

const MyBattlesHistory = () => {
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(12);
  return (
    <div className="my--battles--history--page">
      <div className="head">
        <div className="container">
          <h1 className="page--title">My battles history</h1>
          <Statistics />
        </div>
      </div>
      <div className="body">
        <div className="container">
          <div className="my--battles--history">
            {MyBattlesHistoryDummyData.slice(offset, offset + perPage).map((battleHistory) => (
              <BattleHistoryCard key={battleHistory.id} data={battleHistory} />
            ))}
          </div>
          <div className="pagination--container">
            <Pagination data={MyBattlesHistoryDummyData} perPage={perPage} setOffset={setOffset} />
            <ItemsPerPageDropdown perPage={perPage} setPerPage={setPerPage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBattlesHistory;
