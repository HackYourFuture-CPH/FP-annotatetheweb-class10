import React from 'react';
import {storiesOf} from '@storybook/react';
import SidebarMenuMobile from './MobileVersion/SidebarMenuMobile.component';
import SidebarMenuDesktop
  from './DesktopVersion/SidebarMenuDesktop.component';
import SidebarMenuResp from './responsive/SidebarMenuResp.component';

storiesOf ('SidebarMenu', module).add ('mobile version', () => <SidebarMenuMobile />);
storiesOf ('SidebarMenu', module).add ('desktop version', () => (
  <SidebarMenuDesktop />
));
storiesOf ('SidebarMenu', module).add('responsive', () => <SidebarMenuResp />)
