import React from 'react';
import './MobileMenu.css';

const MobileMenu = () => {
  return (
    <div ClassName="mobilemenu-menuwrap">
      <p className="mobilemenu-title">Annotate the web</p>
      <input type="checkbox" className="mobilemenu-toggler" />
      <div className="mobilemenu-hamburgur">
        <div className="mobilemenu-lines" />
      </div>
      <div className="mobilemenu-menu">
        <div>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
