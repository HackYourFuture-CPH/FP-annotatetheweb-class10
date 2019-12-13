import React from "react";
import "./MobileMenu.css";

const MobileMenu = () => {
  return (
    <div ClassName="mobilemenu-menuwrap">
      <p className="mobilemenu-title">Annotate the web</p>
      <input type="checkbox" className="mobilemenu-toggler"></input>
      <div className="mobilemenu-hamburgur">
        <div className="mobilemenu-lines"></div>
      </div>
      <div className="mobilemenu-menu">
        <div>
          <div>
            <ul>
              <li>
                <a href="#">Annotate</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
            <button className="mobilemenu-button">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
