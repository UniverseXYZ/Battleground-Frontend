import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './SortByDropdown.scss';
import uuid from 'react-uuid';
import chevronDownIcon from '../../../assets/images/icons/chevron-down-icon.svg';
import useOutsideClick from '../../../utils/hooks/useOutsideClick';

const SortByDropdown = ({ options, selectedOption, setSelectedOption }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    setShowDropdown(false);
  });

  return (
    <div
      className={`sort--by--dropdown${showDropdown ? ' opened' : ''}`}
      aria-hidden="true"
      onClick={() => setShowDropdown(!showDropdown)}
      ref={ref}
    >
      <span className="selected--option">{selectedOption}</span>
      <img className="chevron" src={chevronDownIcon} alt="Chevron down" />
      {showDropdown && (
        <ul>
          {options.map((item) => (
            <li key={uuid()} aria-hidden="true" onClick={() => setSelectedOption(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

SortByDropdown.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array]).isRequired,
  selectedOption: PropTypes.string.isRequired,
  setSelectedOption: PropTypes.func.isRequired,
};

export default SortByDropdown;
