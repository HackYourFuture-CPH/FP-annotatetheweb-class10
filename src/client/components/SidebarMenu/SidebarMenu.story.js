import React from 'react';
import { storiesOf } from '@storybook/react';
import SidebarMenu from './SidebarMenu.component';
import SidebarMenuAuthenticated from './SidebarMenuAuthenticated.component';
import OpeningMenu from './OpeningMenu.component';

storiesOf('SidebarMenu', module)
  .add('Not authenticated', () => <SidebarMenu />)
  .add('Authenticated', () => <SidebarMenuAuthenticated />)
  .add('OpeningMenu', () => <OpeningMenu />)
