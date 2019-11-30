import React from 'react';
import './SidebarMenuMobile.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faCopy,
  faEnvelope,
  faCommentAlt,
  faShareAlt,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

const SidebarMenu = () => {
  return (
    <div className="sidebar-menu-wrapper-mobile">
      <div className="sidebar-menu-mobile">
        <button className="sidebar-menu-button-mobile black">
          <FontAwesomeIcon
            icon={faSearch}
            size="lg"
            className="sidebar-menu-invert-color"
            fixedWidth
          />
        </button>
        <button className="sidebar-menu-button-mobile black sidebar-menu-inactive">
          <FontAwesomeIcon
            icon={faCopy}
            size="lg"
            className="sidebar-menu-invert-color"
            fixedWidth
          />
        </button>
        <button className="sidebar-menu-button-mobile black sidebar-menu-inactive">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="lg"
            className="sidebar-menu-invert-color "
            fixedWidth
          />
        </button>
        <button className="sidebar-menu-button-mobile black">
          <FontAwesomeIcon
            icon={faCommentAlt}
            size="lg"
            className="sidebar-menu-invert-color"
            fixedWidth
          />
        </button>
        <button className="sidebar-menu-button-mobile black">
          <FontAwesomeIcon
            icon={faShareAlt}
            size="lg"
            className="sidebar-menu-invert-color"
            fixedWidth
          />
        </button>
        <button className="sidebar-menu-button-mobile black sidebar-menu-inactive">
          <FontAwesomeIcon
            icon={faCog}
            size="lg"
            className="sidebar-menu-invert-color"
            fixedWidth
          />
        </button>

      </div>
    </div>
  );
};

export default SidebarMenu;
