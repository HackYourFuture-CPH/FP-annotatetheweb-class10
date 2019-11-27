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
    <div className="wrapper-resp">
      <div className="side-menu-resp">
        <button className="icon-width-resp light">
          <FontAwesomeIcon
            icon={faSearch}
            size="lg"
            className="invert-color"
            fixedWidth
          />
        </button>
        <button className="icon-width-resp light inactive">
          <FontAwesomeIcon
            icon={faCopy}
            size="lg"
            className="invert-color"
            fixedWidth
          />
        </button>
        <button className="icon-width-resp light inactive">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="lg"
            className="invert-color "
            fixedWidth
          />
        </button>
        <button className="icon-width-resp light">
          <FontAwesomeIcon
            icon={faCommentAlt}
            size="lg"
            className="invert-color"
            fixedWidth
          />
        </button>
        <button className="icon-width-resp light">
          <FontAwesomeIcon
            icon={faShareAlt}
            size="lg"
            className="invert-color"
            fixedWidth
          />
        </button>
        <button className="icon-width-resp light inactive">
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

export default SidebarMenuResp;
