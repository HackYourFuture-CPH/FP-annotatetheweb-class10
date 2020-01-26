import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuButton from './MenuButton.component';

storiesOf('MenuButton', module).add('with text', () => <MenuButton className="container-menu-button"/>);
export default MenuButton;