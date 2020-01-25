import React from 'react';
import Header from '../Header/Header.Component';
import imageHYF from '../../assets/images/hyf-logo2.png';
import imageCodeArt from '../../assets/images/codeart-logo2.png';
import './MobileMenu.css';

const MobileMenu = () => {
  return (
    <div className="mobilemenu-menuwrap">
      <input type="checkbox" className="mobilemenu-toggler" />
      <div className="mobilemenu-hamburgur">
        <div className="mobilemenu-lines" />
      </div>
      <div className="mobilemenu-menu">
        <div>
          <div>
            <Header title="Annotate the web" />
            <ul>
              <li>
                <a href="/annotate">Annotate</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
            <button type="button" className="mobilemenu-button">
              Register
            </button>
            <div className="logos">
              <img alt="HYF" src={imageHYF} className="" />
              <img alt="CodeArt" src={imageCodeArt} className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
