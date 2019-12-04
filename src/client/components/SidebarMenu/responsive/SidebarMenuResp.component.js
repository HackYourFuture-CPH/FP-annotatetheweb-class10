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
import Button from './Button.component';

const onButtonClick = () => {
  return true;
};

const SidebarMenuResp = () => {
  return (
    <div className="sidebar-menu-wrapper-resp">
      <div className="sidebar-menu-resp">

        <Button
          icon={faSearch}
          buttonClasses={
            'sidebar-menu-button-resp sidebar-menu-icon-width-resp black pink'
          }
          fontClasses={'sidebar-menu-invert-color'}
          onClick={onButtonClick}
        />
        <Button
          icon={faCopy}
          buttonClasses={
            'sidebar-menu-button-resp sidebar-menu-icon-width-resp black sidebar-menu-inactive'
          }
          fontClasses={'sidebar-menu-invert-color'}
          onClick={onButtonClick}
        />
        <Button
          icon={faEnvelope}
          buttonClasses={
            'sidebar-menu-button-resp sidebar-menu-icon-width-resp black sidebar-menu-inactive'
          }
          fontClasses={'sidebar-menu-invert-color'}
          onClick={onButtonClick}
        />
        <Button
          icon={faCommentAlt}
          buttonClasses={
            'sidebar-menu-button-resp sidebar-menu-icon-width-resp black'
          }
          fontClasses={'sidebar-menu-invert-color'}
          onClick={onButtonClick}
        />
        <Button
          icon={faShareAlt}
          buttonClasses={
            'sidebar-menu-button-resp sidebar-menu-icon-width-resp black'
          }
          fontClasses={'sidebar-menu-invert-color'}
          onClick={onButtonClick}
        />
        <Button
          icon={faCog}
          buttonClasses={
            'sidebar-menu-button-resp sidebar-menu-icon-width-resp black sidebar-menu-inactive'
          }
          fontClasses={'sidebar-menu-invert-color'}
          onClick={onButtonClick}
        />

      </div>
    </div>
  );
};

export default SidebarMenuResp;
