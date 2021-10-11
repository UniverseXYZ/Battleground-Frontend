import React from 'react';
import SortByDropdown from '../../components/dropdowns/sortByDropdown/SortByDropdown';
import SearchField from '../../components/input/searchField/SearchField';
import PolymorphCard from '../../components/polymorphCard/PolymorphCard';
import './MyPolymorphs.scss';

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
