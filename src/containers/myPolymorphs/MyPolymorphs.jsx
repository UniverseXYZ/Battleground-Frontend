import React, { useState } from 'react';
import SortByDropdown from '../../components/dropdowns/sortByDropdown/SortByDropdown';
import SearchField from '../../components/input/searchField/SearchField';
import PolymorphCard from '../../components/polymorphCard/PolymorphCard';
import './MyPolymorphs.scss';

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
        <div className="my--polymorphs">
          <PolymorphCard />
          <PolymorphCard />
          <PolymorphCard />
          <PolymorphCard />
          <PolymorphCard />
          <PolymorphCard />
          <PolymorphCard />
        </div>
      </div>
    </div>
  );
};

export default MyPolymorphs;
