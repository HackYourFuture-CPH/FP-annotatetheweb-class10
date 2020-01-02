import React from 'react';
import { storiesOf } from '@storybook/react';
import DotButton from './DotButton.component';

storiesOf('DotButton', module).add('with text', () => (
  <DotButton title="..." />
));

export default DotButton;
