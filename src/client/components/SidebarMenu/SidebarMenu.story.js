import React from 'react';
import {storiesOf} from '@storybook/react';
import SidebarMenu from './MobileVersion/SidebarMenu.component';
import SidebarMenuDesktop
  from './DesktopVersion/SidebarMenuDesktop.component';
import SidebarMenuResp from './responsive/SidebarMenuResp.component';

storiesOf ('SidebarMenu', module).add ('mobile version', () => <SidebarMenu />);
storiesOf ('SidebarMenu', module).add ('desktop version', () => (
  <SidebarMenuDesktop />
));
storiesOf ('SidebarMenu', module).add('responsive', () => <SidebarMenuResp />)
