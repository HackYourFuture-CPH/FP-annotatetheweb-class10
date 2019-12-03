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
import Button from './ButtonResp';

const SidebarMenuResp = () => {
  return (
    <div className="sidebar-menu-wrapper-resp">
      <div className="sidebar-menu-resp">

        <Button
          iconName={faSearch}
          buttonClasses={
            'sidebar-menu-button-resp sidebar-menu-icon-width-resp black pink'
          }
          fontClasses={'sidebar-menu-invert-color'}
        />
        <Button
          iconName={faCopy}
          buttonClasses={
            'sidebar-menu-button-resp sidebar-menu-icon-width-resp black sidebar-menu-inactive'
          }
          fontClasses={'sidebar-menu-invert-color'}
        />
        <Button
          iconName={faEnvelope}
          buttonClasses={
            'sidebar-menu-button-resp sidebar-menu-icon-width-resp black sidebar-menu-inactive'
          }
          fontClasses={'sidebar-menu-invert-color'}
        />
        <Button
          iconName={faCommentAlt}
          buttonClasses={
            'sidebar-menu-button-resp sidebar-menu-icon-width-resp black'
          }
          fontClasses={'sidebar-menu-invert-color'}
        />
        <Button
          iconName={faShareAlt}
          buttonClasses={
            'sidebar-menu-button-resp sidebar-menu-icon-width-resp black'
          }
          fontClasses={'sidebar-menu-invert-color'}
        />
        <Button
          iconName={faCog}
          buttonClasses={
            'sidebar-menu-button-resp sidebar-menu-icon-width-resp black sidebar-menu-inactive'
          }
          fontClasses={'sidebar-menu-invert-color'}
        />

      </div>
    </div>
  );
};

export default SidebarMenuResp;
