import React from 'react';
import './Footer.css';
import hyflogoblackbackground from '../../assets/images/hyf_logo_black_background.png';
import codeartlogoblackbackground from '../../assets/images/codeart_logo_black_background.png';

const Footer = () => {
  return (
    <footer className="footer-btn">
      <div className="footer-links-wrapper">
        <div className="footer-text">Created by</div>
        <a
          href="https://www.hackyourfuture.dk"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="logo-hyf"
            className="footer-hyf-logo"
            src={hyflogoblackbackground}
          />
        </a>
        <div className="footer-text">and</div>
        <a
          href="https://www.codeart.dk"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="logo-code"
            className="footer-codeart-logo"
            src={codeartlogoblackbackground}
          />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
