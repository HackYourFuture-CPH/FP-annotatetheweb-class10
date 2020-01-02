import React from 'react';
import { storiesOf } from '@storybook/react';
import ToggleButton from './ToggleButton.component';

storiesOf('ToggleButton', module).add('Toggle button', () => {
  return (
    <ToggleButton
      // eslint-disable-next-line no-console
      onChange={(val) => console.log(val)}
      activeText="Desktop"
      inactiveText="Mobile"
    />
  );
});
