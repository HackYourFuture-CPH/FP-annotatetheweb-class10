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
        <button>
          <FontAwesomeIcon icon={faSearch} size="lg" className="invert-color" />
        </button>
        <button className="inactive">
          <FontAwesomeIcon icon={faCopy} size="lg" className="invert-color " />
        </button>
        <button className="inactive">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="lg"
            className="invert-color "
          />
        </button>
        <button>
          <FontAwesomeIcon
            icon={faCommentAlt}
            size="lg"
            className="invert-color"
          />
        </button>
        <button>
          <FontAwesomeIcon
            icon={faShareAlt}
            size="lg"
            className="invert-color"
          />
        </button>
        <button className="inactive">
          <FontAwesomeIcon icon={faCog} size="lg" className="invert-color" />
        </button>

      </div>
    </div>
  );
};

export default SidebarMenuDesktop;