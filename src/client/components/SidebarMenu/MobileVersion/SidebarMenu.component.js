import React from 'react';
import './SidebarMenu.css';
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
    <div className="wrapper">
      <div className="side-menu">
        <button className="light">
          <FontAwesomeIcon
            icon={faSearch}
            size="lg"
            className="invert-color"
            fixedWidth
          />
        </button>
        <button className="light inactive">
          <FontAwesomeIcon
            icon={faCopy}
            size="lg"
            className="invert-color"
            fixedWidth
          />
        </button>
        <button className="light inactive">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="lg"
            className="invert-color "
            fixedWidth
          />
        </button>
        <button className="light">
          <FontAwesomeIcon
            icon={faCommentAlt}
            size="lg"
            className="invert-color"
            fixedWidth
          />
        </button>
        <button className="light">
          <FontAwesomeIcon
            icon={faShareAlt}
            size="lg"
            className="invert-color"
            fixedWidth
          />
        </button>
        <button className="light inactive">
          <FontAwesomeIcon
            icon={faCog}
            size="lg"
            className="invert-color"
            fixedWidth
          />
        </button>

      </div>
    </div>
  );
};

export default SidebarMenu;
