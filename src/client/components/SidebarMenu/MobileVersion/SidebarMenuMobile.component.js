import React from 'react';
import './SidebarMenuMobile.css';
import {
  faSearch,
  faCopy,
  faEnvelope,
  faCommentAlt,
  faShareAlt,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import Button from './ButtonMobile';

const SidebarMenu = () => {
  return (
    <div className="sidebar-menu-wrapper-mobile">
      <div className="sidebar-menu-mobile">

        <Button
          iconName={faSearch}
          buttonClasses={"sidebar-menu-button-mobile black"}
          fontClasses={"sidebar-menu-invert-color"}
        />
        <Button
          iconName={faCopy}
          buttonClasses={
            "sidebar-menu-button-mobile black sidebar-menu-inactive"
          }
          fontClasses={"sidebar-menu-invert-color"}
        />
        <Button
          iconName={faEnvelope}
          buttonClasses={
            "sidebar-menu-button-mobile black sidebar-menu-inactive"
          }
          fontClasses={"sidebar-menu-invert-color"}
        />
        <Button
          iconName={faCommentAlt}
          buttonClasses={"sidebar-menu-button-mobile black"}
          fontClasses={"sidebar-menu-invert-color"}
        />
        <Button
          iconName={faShareAlt}
          buttonClasses={"sidebar-menu-button-mobile black"}
          fontClasses={"sidebar-menu-invert-color"}
        />
        <Button
          iconName={faCog}
          buttonClasses={
            "sidebar-menu-button-mobile black sidebar-menu-inactive"
          }
          fontClasses={"sidebar-menu-invert-color"}
        />

      </div>
    </div>
  );
};

export default SidebarMenu;
