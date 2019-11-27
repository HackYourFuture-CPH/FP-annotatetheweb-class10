import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faCopy,
  faEnvelope,
  faCommentAlt,
  faShareAlt,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import './SidebarMenuResp.css';

const SidebarMenuResp = () => {
  return (
    <div className="sidebar-menu-wrapper-resp">
      <div className="sidebar-menu-resp">
        <button className="sidebar-menu-button-resp sidebar-menu-icon-width-resp black">
          <FontAwesomeIcon
            icon={faSearch}
            size="lg"
            className="sidebar-menu-invert-color"
            fixedWidth
          />
        </button>
        <button className="sidebar-menu-button-resp sidebar-menu-icon-width-resp black sidebar-menu-inactive">
          <FontAwesomeIcon
            icon={faCopy}
            size="lg"
            className="sidebar-menu-invert-color"
            fixedWidth
          />
        </button>
        <button className="sidebar-menu-button-resp sidebar-menu-icon-width-resp black sidebar-menu-inactive">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="lg"
            className="sidebar-menu-invert-color "
            fixedWidth
          />
        </button>
        <button className="sidebar-menu-button-resp sidebar-menu-icon-width-resp black">
          <FontAwesomeIcon
            icon={faCommentAlt}
            size="lg"
            className="sidebar-menu-invert-color"
            fixedWidth
          />
        </button>
        <button className="sidebar-menu-button-resp sidebar-menu-icon-width-resp black">
          <FontAwesomeIcon
            icon={faShareAlt}
            size="lg"
            className="sidebar-menu-invert-color"
            fixedWidth
          />
        </button>
        <button className="sidebar-menu-button-resp sidebar-menu-icon-width-resp black sidebar-menu-inactive">
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

export default SidebarMenuResp;
