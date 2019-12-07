import React from "react";
import "./MobileMenu.css";

const MobileMenu = () => {
  return (
    <div ClassName="MobileMenu-menuwrap">
      <input type="checkbox" className="MobileMenu-toggler"></input>
      <div className="MobileMenu-hamburgur">
        <div className="MobileMenu-lines"></div>
      </div>
      <div className="MobileMenu-menu">
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
            <button className="MobileMenu-button">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
