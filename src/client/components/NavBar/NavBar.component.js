import React from "react";
import "./NavBar.css";

const NavBar = ({ title, navElements,href }) => {
  const navList = navElements.map(item => {
    return (
      <a className = "nav-link" href={href}>
        <li className="nav-style" key={item.id}>
          {item.title}
        </li>
      </a>
    );
  });
  return (
    <div className="nav-bar">
      <ul className="nav-elements nav-style">{navList}</ul>
      <button className="nav-style register-button">{title}</button>
    </div>
  );
};
export default NavBar;
