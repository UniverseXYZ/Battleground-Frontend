import React, { useState } from 'react';
import { useLocation, Redirect, useHistory } from 'react-router-dom';
import backArrow from '../../assets/images/icons/go-back-arrow.svg';
import './PolymorphPage.scss';
import PolymorphCard from '../../components/polymorphCard/PolymorphCard';
import AttackProgress from '../../components/attackProgress/AttackProgress';
import DefenseProgress from '../../components/defenseProgress/DefenseProgress';
import Tabs from '../../components/tabs/Tabs';
import PolymorphProperties from '../../components/polymorphProperties/PolymorphProperties';
import Button from '../../components/button/Button';
import linkOutIcon from '../../assets/images/icons/link-out.svg';

const PolymorphPage = () => {
  const history = useHistory();
  const location = useLocation();
  const selectedPolymorph = location.state ? location.state.polymorph : null;
  const [propertiesTabSelected, setPropertiesTabSelected] = useState(true);
  const [battleHistoryTabSelected, setBattleHistoryTabSelected] = useState(false);

  const tabs = [
    {
      name: 'Properties',
      active: propertiesTabSelected,
      handler: () => {
        setPropertiesTabSelected(true);
        setBattleHistoryTabSelected(false);
      },
    },
    {
      name: 'Battles history',
      active: battleHistoryTabSelected,
      handler: () => {
        setPropertiesTabSelected(false);
        setBattleHistoryTabSelected(true);
      },
    },
  ];

  return selectedPolymorph ? (
    <div className="polymorph--page">
      <div className="container polymorph--page--section">
        <div
          className="go--back--polymorph"
          aria-hidden="true"
          onClick={() => history.push('/my-polymorphs')}
        >
          <img src={backArrow} alt="go back" />
          <span>My Polymorphs</span>
        </div>
        <div className="polymorph--page--content">
          <div className="avatar--section">
            <PolymorphCard data={selectedPolymorph} />
            <div className="attack--and--defense--progress">
              <AttackProgress />
              <DefenseProgress />
            </div>
          </div>
          <div className="options--section">
            <div className="options--header">
              <div className="name">{selectedPolymorph?.name}</div>
              <div className="polymorph--details">
                <div>Rarity rank: #{selectedPolymorph.RarityRank}</div>
                <div>Rarity score: {selectedPolymorph.RarityScore}</div>
                <div>ID: #{selectedPolymorph.id}</div>
              </div>
              <div className="description">{selectedPolymorph?.descripion}</div>
            </div>
            <div className="attack--and--defense--progress--tablet">
              <AttackProgress />
              <DefenseProgress />
            </div>
            <div className="options--body">
              <Tabs items={tabs} />
              {propertiesTabSelected ? (
                <PolymorphProperties />
              ) : (
                <div className="battle-history">battle history</div>
              )}
            </div>
            <div className="option--buttons">
              <Button variant="primary" text="Battle now" />
              <Button variant="secondary" text="View on Opensea" icon={linkOutIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default PolymorphPage;
