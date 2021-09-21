import React from 'react';
import './Footer.scss';
import battleuniverse from '../../assets/images/landingPage/battleuniverse.png';
import Button from '../button/Button';
import inIcon from '../../assets/images/icons/in.svg';
import twitter from '../../assets/images/icons/twitter.svg';
import fb from '../../assets/images/icons/fbIcon.svg';
import Input from '../input/Input';

const Footer = () => (
  <div className="footer-section">
    <div className="footer-section-up">
      <div className="container footer-section-up-container">
        <div className="left-section">
          <img src={battleuniverse} alt="img" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
        <div className="right-section">
          <h1>Subscribe to our mailing list</h1>
          <div>
            <Input placeholder="Enter your email" cornerColor="#0a132d" />
            <Button variant="primary" text="Subscribe" />
          </div>
          <p>
            I agree to receive emails, including company and industry updates and promotional
            marketing.
          </p>
        </div>
      </div>
    </div>
    <div className="footer-section-down">
      <div className="container footer-section-down-container">
        <div className="privacy-policy">
          <h1>© 2020 Polymorphic Battle. All rights reserved | Privacy Policy</h1>
        </div>
        <div className="links">
          <div>
            <img src={inIcon} alt="icon" />
          </div>
          <div>
            <img src={twitter} alt="icon" />
          </div>
          <div>
            <img src={fb} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
