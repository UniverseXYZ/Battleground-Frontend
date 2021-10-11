import React, { useState } from 'react';
import SortByDropdown from '../../components/dropdowns/sortByDropdown/SortByDropdown';
import SearchField from '../../components/input/searchField/SearchField';
import PolymorphCard from '../../components/polymorphCard/PolymorphCard';
import NoDataFound from '../../components/noDataFound/noDataFound';
import './MyPolymorphs.scss';
import { PolymorphCardDummyData } from '../../utils/fixtures/PolymorphCardDummyData';

const MyPolymorphs = () => {
  const options = ['Recently Listed', 'Lowest Price First', 'Highest Price First', 'Recently Sold'];
  const [selectedOption, setSelectedOption] = useState('Sort by');
  const [searchValue, setSearchValue] = useState('');

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
