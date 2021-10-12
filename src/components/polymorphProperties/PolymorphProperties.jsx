import React from 'react';
import bluePuzzle from '../../assets/images/polymorphPage/blue-puzzle.png';
import pinkOrangePuzzle from '../../assets/images/polymorphPage/pink-orange-puzzle.png';
import orangePuzzle from '../../assets/images/polymorphPage/orange-puzzle.png';
import pinkPuzzle from '../../assets/images/polymorphPage/pink-puzzle.png';
import './PolymorphProperties.scss';

const PolymorphProperties = () => {
  console.log(122);
  return (
    <div className="rarity--rank--descriptions">
      <div className="rarity--description--gradient">
        <div className="rarity--description selected--pink--orange">
          <div className="matching">
            <img src={pinkOrangePuzzle} alt="Pink orange" />
            <span className="tooltiptext">Main set trait</span>
          </div>
          <h4>Base character</h4>
          <h3>Troll God</h3>
          <p className="description">28% have this trait</p>
        </div>
        <div className="rarity--rank--border" />
      </div>

      <div className="rarity--description selected--blue">
        <div className="matching">
          <img src={bluePuzzle} alt="Blue" />
          <span className="tooltiptext">Main set trait</span>
        </div>
        <h4>Headwear</h4>
        <h3>Golden Spartan Helmet</h3>
        <p className="description">58% have this trait</p>
      </div>

      <div className="rarity--description selected--orange">
        <div className="matching">
          <img src={orangePuzzle} alt="Orange" />
          <span className="tooltiptext">Main set trait</span>
        </div>
        <h4>Eyewear</h4>
        <h3>No Eyewear</h3>
        <p className="description">58% have this trait</p>
      </div>

      <div className="rarity--description selected--pink">
        <div className="matching">
          <img src={pinkPuzzle} alt="Pink" />
          <span className="tooltiptext">Main set trait</span>
        </div>
        <h4>Footwear</h4>
        <h3>Brown Spartan Sandals</h3>
        <p className="description">58% have this trait</p>
      </div>
      <div className="rarity--description selected--blue">
        <div className="matching">
          <img src={bluePuzzle} alt="Blue" />
          <span className="tooltiptext">Main set trait</span>
        </div>
        <h4>Torso</h4>
        <h3>Silver Spartan Armor</h3>
        <p className="description">58% have this trait</p>
      </div>
      <div className="rarity--description selected--orange">
        <div className="matching">
          <img src={orangePuzzle} alt="Orange" />
          <span className="tooltiptext">Main set trait</span>
        </div>
        <h4>Pants</h4>
        <h3>Spartan Pants</h3>
        <p className="description">58% have this trait</p>
      </div>
      <div className="rarity--description">
        <h4>Left-hand accessory</h4>
        <h3>Bow & Arrow</h3>
        <p className="description">58% have this trait</p>
      </div>
      <div className="rarity--description selected--pink">
        <div className="matching">
          <img src={pinkPuzzle} alt="Pink" />
          <span className="tooltiptext">Main set trait</span>
        </div>
        <h4>Right -hand accessory</h4>
        <h3>Silver Spartan Sword</h3>
        <p className="description">58% have this trait</p>
      </div>
      <div className="rarity--description">
        <h4>Background</h4>
        <h3>Happy Fisher</h3>
        <p className="description">58% have this trait</p>
      </div>
    </div>
  );
};

export default PolymorphProperties;
