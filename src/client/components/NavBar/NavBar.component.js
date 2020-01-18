import React from 'react';
import RegisterButton from '../RegisterButton/RegisterButton.component';
import './NavBar.css';

const NavBar = ({ navElements, registerButtonTitle, onClick }) => {
  const navList = navElements.map((item) => {
    return (
      <li className="nav-style" key={item.id}>
        <a className="nav-link" href={item.href} key={item.id} target={item.target}>
          {item.title}
        </a>
      </li>
    );
  });
  return (
    <div className="nav-bar">
      <ul className="nav-elements nav-style">{navList}</ul>
      <RegisterButton registerButtonTitle={registerButtonTitle} onClick={onClick} />
    </div>
  );
};
export default NavBar;