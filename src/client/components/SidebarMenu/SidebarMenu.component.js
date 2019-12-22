import React from 'react';
import {
  faSearch,
  faCopy,
  faEnvelope,
  faCommentAlt,
  faShareAlt,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import './SidebarMenu.css';
import Button from './Button.component';

const SidebarMenu = () => {
  return (
    <div className="sidebar-menu-wrapper">
      <div className="sidebar-menu">
        <Button
          icon={faSearch}
          buttonClasses="sidebar-menu-button sidebar-menu-icon-width black pink"
          fontClasses="sidebar-menu-invert-color"
        />
        <Button
          icon={faCopy}
          buttonClasses="sidebar-menu-button sidebar-menu-icon-width black sidebar-menu-inactive"
          fontClasses="sidebar-menu-invert-color"
        />
        <Button
          icon={faEnvelope}
          buttonClasses="sidebar-menu-button sidebar-menu-icon-width black sidebar-menu-inactive"
          fontClasses="sidebar-menu-invert-color"
        />
        <Button
          icon={faCommentAlt}
          buttonClasses="sidebar-menu-button sidebar-menu-icon-width black"
          fontClasses="sidebar-menu-invert-color"
        />
        <Button
          icon={faShareAlt}
          buttonClasses="sidebar-menu-button sidebar-menu-icon-width black"
          fontClasses="sidebar-menu-invert-color"
        />
        <Button
          icon={faCog}
          buttonClasses="sidebar-menu-button sidebar-menu-icon-width black sidebar-menu-inactive"
          fontClasses="sidebar-menu-invert-color"
        />
      </div>
    </div>
  );
};

export default SidebarMenu;
