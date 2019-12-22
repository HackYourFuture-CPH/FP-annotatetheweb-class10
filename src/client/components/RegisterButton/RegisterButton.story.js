import React from 'react';
import { storiesOf } from '@storybook/react';
import RegisterButton from './RegisterButton.component';

storiesOf('RegisterButton', module).add('with title ', () => (
  <RegisterButton title="Register" />
));
