import React from 'react';
import './Footer.scss';
import Button from '../button/Button.jsx';
import Input from '../input/Input.jsx';
import linkedinIcon from '../../assets/images/icons/linkedin-icon.svg';
import twitterIcon from '../../assets/images/icons/twitter-icon.svg';
import fbIcon from '../../assets/images/icons/fb-icon.svg';
import battleuniverse from '../../assets/images/icons/app-icon.svg';

const Footer = () => (
  <div className="footer-section">
    <div className="horizontal--gradient" />
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
          <div className="subscribe-form">
            <Input placeholder="Enter your email" />
            <div className="subscribe-btn">
              <Button variant="primary" text="Subscribe" />
            </div>
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
            <img src={linkedinIcon} alt="linkedin" />
          </div>
          <div>
            <img src={twitterIcon} alt="twitter" />
          </div>
          <div>
            <img src={fbIcon} alt="facebook" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
