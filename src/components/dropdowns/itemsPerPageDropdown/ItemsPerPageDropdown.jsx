import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import arrowDownIcon from '../../../assets/images/pagination/arrow-down.svg';
import './ItemsPerPageDropdown.scss';
import useOutsideClick from '../../../utils/hooks/useOutsideClick';

const ItemsPerPageDropdown = ({ perPage, setPerPage }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const itemsPerPage = [12, 24];
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    setShowDropdown(false);
  });

  return (
    <div className="items--per--page">
      <span>Items per page</span>
      <button type="button" ref={ref} onClick={() => setShowDropdown(!showDropdown)}>
        <span>{perPage}</span>
        <img src={arrowDownIcon} alt="Chevron" className={showDropdown ? 'rotate' : ''} />
        {showDropdown && (
          <div className="items--per--page--dropdown">
            <ul>
              {itemsPerPage.map((n) => (
                <li
                  key={uuid()}
                  className={perPage === n ? 'active' : ''}
                  onClick={() => setPerPage(n)}
                  aria-hidden="true"
                >
                  {n}
                </li>
              ))}
            </ul>
          </div>
        )}
      </button>
    </div>
  );
};

ItemsPerPageDropdown.propTypes = {
  perPage: PropTypes.number.isRequired,
  setPerPage: PropTypes.func.isRequired,
};

export default ItemsPerPageDropdown;
