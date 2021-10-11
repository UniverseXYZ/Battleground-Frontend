import React, { useState } from 'react';
import uuid from 'react-uuid';
import './MyPolymorphs.scss';
import SortByDropdown from '../../components/dropdowns/sortByDropdown/SortByDropdown.jsx';
import SearchField from '../../components/input/searchField/SearchField.jsx';
import PolymorphCard from '../../components/polymorphCard/PolymorphCard.jsx';
import NoDataFound from '../../components/noDataFound/noDataFound.jsx';
import { PolymorphCardDummyData } from '../../utils/fixtures/PolymorphCardDummyData.js';

const MyPolymorphs = () => {
  const options = ['Recently Listed', 'Lowest Price First', 'Highest Price First', 'Recently Sold'];
  const [selectedOption, setSelectedOption] = useState('Sort by');
  const [searchValue, setSearchValue] = useState('');

  const isPolymorphExist = () =>
    PolymorphCardDummyData.length &&
    PolymorphCardDummyData.filter((item) => item.name.toLowerCase().includes(searchValue)).length;

  return (
    <div className="my--polymorphs--page">
      <div className="container">
        <h1 className="page--title">My Polymorphs</h1>
        <div className="search--sort--by--section">
          <SearchField value={searchValue} setValue={setSearchValue} />
          <SortByDropdown
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
        <div className={`my--polymorphs ${!isPolymorphExist() ? 'empty' : ''}`}>
          {isPolymorphExist() ? (
            PolymorphCardDummyData.filter((item) =>
              item.name.toLowerCase().includes(searchValue)
            ).map((data) => <PolymorphCard key={uuid()} data={data} />)
          ) : (
            <NoDataFound
              title="No Polymorphs found"
              desc="Buy Polymorphs on marketplace by clicking the button below"
              btnText="Go to Marketplace"
              btnAction="/marketplace"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPolymorphs;
