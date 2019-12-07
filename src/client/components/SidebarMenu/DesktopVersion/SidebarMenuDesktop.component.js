import React from 'react';
import './SidebarMenuDesktop.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faCopy,
  faEnvelope,
  faCommentAlt,
  faShareAlt,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

const SidebarMenuDesktop = () => {
  return (
    <div className="sidebar-menu-wrapper-desktop">
      <div className="sidebar-menu-desktop">
        <button className="sidebar-menu-button-desktop sidebar-menu-icon-width-desktop black">
          <FontAwesomeIcon
            icon={faSearch}
            className="sidebar-menu-invert-color"
            fixedWidth
          />
        </button>
        <button className="sidebar-menu-button-desktop sidebar-menu-icon-width-desktop black sidebar-menu-inactive">
          <FontAwesomeIcon
            icon={faCopy}
            fixedWidth
            className="sidebar-menu-invert-color "
          />
        </button>
        <button className="sidebar-menu-button-desktop sidebar-menu-icon-width-desktop sidebar-menu-inactive black">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="sidebar-menu-invert-color"
            fixedWidth
          />
        </button>
        <button className="sidebar-menu-button-desktop sidebar-menu-icon-width-desktop black">
          <FontAwesomeIcon
            icon={faCommentAlt}
            className="sidebar-menu-invert-color"
            fixedWidth
          />
        </button>
        <button className="sidebar-menu-button-desktop sidebar-menu-icon-width-desktop black">
          <FontAwesomeIcon
            icon={faShareAlt}
            className="sidebar-menu-invert-color"
            fixedWidth
          />
        </button>
        <button className="sidebar-menu-button-desktop sidebar-menu-icon-width-desktop black sidebar-menu-inactive">
          <FontAwesomeIcon
            icon={faCog}
            className="sidebar-menu-invert-color"
            fixedWidth
          />
        </button>

      </div>
    </div>
  );
};

export default SidebarMenuDesktop;
