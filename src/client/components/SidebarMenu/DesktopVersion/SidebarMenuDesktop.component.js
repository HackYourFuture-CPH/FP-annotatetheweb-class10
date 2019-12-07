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
import Button from './ButtonDesktop';

const SidebarMenuDesktop = () => {
  return (
    <div className="sidebar-menu-wrapper-desktop">
      <div className="sidebar-menu-desktop">

        <Button
          iconName={faSearch}
          buttonClasses={
            'sidebar-menu-button-desktop sidebar-menu-icon-width-desktop black'
          }
          fontClasses={'sidebar-menu-invert-color'}
        />
        <Button
          iconName={faCopy}
          buttonClasses={
            'sidebar-menu-button-desktop sidebar-menu-icon-width-desktop black sidebar-menu-inactive'
          }
          fontClasses={'sidebar-menu-invert-color'}
        />
        <Button
          iconName={faEnvelope}
          buttonClasses={
            'sidebar-menu-button-desktop sidebar-menu-icon-width-desktop sidebar-menu-inactive black'
          }
          fontClasses={'sidebar-menu-invert-color'}
        />
        <Button
          iconName={faCommentAlt}
          buttonClasses={
            'sidebar-menu-button-desktop sidebar-menu-icon-width-desktop black'
          }
          fontClasses={'sidebar-menu-invert-color'}
        />
        <Button
          iconName={faShareAlt}
          buttonClasses={
            'sidebar-menu-button-desktop sidebar-menu-icon-width-desktop black'
          }
          fontClasses={'sidebar-menu-invert-color'}
        />
        <Button
          iconName={faCog}
          buttonClasses={
            'sidebar-menu-button-desktop sidebar-menu-icon-width-desktop black sidebar-menu-inactive'
          }
          fontClasses={'sidebar-menu-invert-color'}
        />

      </div>
    </div>
  );
};

export default SidebarMenuDesktop;
