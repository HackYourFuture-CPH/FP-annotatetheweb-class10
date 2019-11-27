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
    <div className="wrapper-desktop">
      <div className="side-menu-desktop">
        <button className="icon-width-desktop light">
          <FontAwesomeIcon
            icon={faSearch}
            className="invert-color"
            fixedWidth
          />
        </button>
        <button className="icon-width-desktop light inactive">
          <FontAwesomeIcon icon={faCopy} fixedWidth className="invert-color " />
        </button>
        <button className="icon-width-desktop inactive light">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="invert-color"
            fixedWidth
          />
        </button>
        <button className="icon-width-desktop light">
          <FontAwesomeIcon
            icon={faCommentAlt}
            className="invert-color"
            fixedWidth
          />
        </button>
        <button className="icon-width-desktop light">
          <FontAwesomeIcon
            icon={faShareAlt}
            className="invert-color"
            fixedWidth
          />
        </button>
        <button className="icon-width-desktop light inactive">
          <FontAwesomeIcon icon={faCog} className="invert-color" fixedWidth />
        </button>

      </div>
    </div>
  );
};

export default SidebarMenuDesktop;
