import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchField.scss';
import searchIcon from '../../../assets/images/icons/search-black-icon.svg';
import clearIcon from '../../../assets/images/icons/clear-icon.svg';

const SearchField = ({ value, setValue }) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={`search--field--container${focus ? ' focused' : ''}`}>
      <div className="search--icon">
        <img src={searchIcon} alt="Search" />
      </div>
      <div className="search--field">
        <input
          type="text"
          placeholder="Search items"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
      <div className="clear--icon">
        {value && (
          <img src={clearIcon} alt="Clear" aria-hidden="true" onClick={() => setValue('')} />
        )}
      </div>
    </div>
  );
};

SearchField.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default SearchField;
