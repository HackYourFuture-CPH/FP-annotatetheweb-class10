import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input.component';

storiesOf('Input', module).add('with text', () => (
  <Input title="make blog as cards" placeholder="add comment..." type="input" />
));

export default Input;
