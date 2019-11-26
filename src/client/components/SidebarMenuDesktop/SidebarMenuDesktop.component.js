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
        <button className="icon-width light">
          <FontAwesomeIcon icon={faSearch} className="invert-color" />
        </button>
        <button className="icon-width light inactive" >
          <FontAwesomeIcon icon={faCopy}  className="invert-color " />
        </button>
        <button className="icon-width inactive light">
          <FontAwesomeIcon
            icon={faEnvelope}
            
            className="invert-color "
          />
        </button>
        <button className="icon-width light">
          <FontAwesomeIcon
            icon={faCommentAlt}
            
            className="invert-color"
          />
        </button>
        <button className="icon-width light">
          <FontAwesomeIcon
            icon={faShareAlt}
            
            className="invert-color"
          />
        </button>
        <button className="icon-width light inactive">
          <FontAwesomeIcon icon={faCog}  className="invert-color" />
        </button>

      </div>
    </div>
  );
};

export default SidebarMenuDesktop;