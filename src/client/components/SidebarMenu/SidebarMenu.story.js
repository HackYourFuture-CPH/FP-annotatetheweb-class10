import React from 'react';
import { storiesOf } from "@storybook/react";
import SidebarMenu from './SidebarMenu.component';

storiesOf("SidebarMenu", module).add("mobile version", () => <SidebarMenu />)
storiesOf("SidebarMenu", module).add("desktop version", () => <SidebarMenu />)