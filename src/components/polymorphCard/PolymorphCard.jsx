import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import cutBorder from '../../assets/images/landingPage/cut-border-blue.png';
import cutBorderHover from '../../assets/images/battlegroundsPage/battleground-cut-border-hover.png';
import './PolymorphCard.scss';

const PolymorphCard = ({ data }) => {
  const history = useHistory();
  return (
    <div>
      <div
        className="polymorph--card--section"
        aria-hidden="true"
        onClick={() => {
          history.push(`/polymorph/${data.id}`, { polymorph: data });
        }}
      >
        <div className="polymorph--card">
          <img src={cutBorder} alt="border-effect" className="left-top-border-effect" />
          <img src={cutBorder} alt="border-effect" className="bottom-right-border-effect" />
          <img
            src={cutBorderHover}
            alt="border-hover-effect"
            className="top-left-border-hover-effect"
          />
          <img
            src={cutBorderHover}
            alt="border-hover-effect"
            className="bottom-right-border-hover-effect"
          />
          <div className="polymorph--card--body">
            <div className="polymorphs--image">
              <img src={data.imageUrl} alt={data.name} />
              <h1 className="polymorph--name">{data.name}</h1>
              <div className="slider-overlay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
PolymorphCard.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default PolymorphCard;
