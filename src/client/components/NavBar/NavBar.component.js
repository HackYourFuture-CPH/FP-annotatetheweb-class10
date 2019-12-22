import React from 'react';
import RegisterButton from '../RegisterButton/RegisterButton.component';
import './NavBar.css';

const NavBar = ({ navElements, href }) => {
  const navList = navElements.map((item) => {
    return (
      <li className="nav-style" key={item.id}>
        <a className="nav-link" href={href} key={item.id}>
          {item.title}
        </a>
      </li>
    );
  });
  return (
    <div className="nav-bar">
      <ul className="nav-elements nav-style">{navList}</ul>
      <RegisterButton title="Register" />
    </div>
  );
};
export default NavBar;
