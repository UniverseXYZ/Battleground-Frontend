import React from 'react';
import SortByDropdown from '../../components/dropdowns/sortByDropdown/SortByDropdown';
import SearchField from '../../components/input/searchField/SearchField';
import PolymorphCard from '../../components/polymorphCard/PolymorphCard';
import NoDataFound from '../../components/noDataFound/noDataFound';
import './MyPolymorphs.scss';
import { PolymorphCardDummyData } from '../../utils/fixtures/PolymorphCardDummyData';

const MyPolymorphs = () => {
  console.log('123');
  return (
    <div className="my--polymorphs--page">
      <div className="container">
        <h1 className="page--title">My Polymorphs</h1>
        <div className="search--sort--by--section">
          <SearchField />
          <SortByDropdown />
        </div>
        <div className={`my--polymorphs ${PolymorphCardDummyData.length === 0 ? 'empty' : ''}`}>
          {PolymorphCardDummyData.length !== 0 ? (
            PolymorphCardDummyData.map((data) => <PolymorphCard data={data} />)
          ) : (
            <NoDataFound
              title="No Polymorphs found"
              desc="Buy Polymorphs on marketplace by clicking the button below"
              btnText="Go to Marketplace"
              btnAction="/"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPolymorphs;
