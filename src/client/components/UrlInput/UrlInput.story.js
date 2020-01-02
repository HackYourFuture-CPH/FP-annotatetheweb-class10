import React from 'react';
import { storiesOf } from '@storybook/react';
import UrlInput from './UrlInput.component';

storiesOf('UrlInput', module).add('Text input for Url ', () => {
  return (
    <UrlInput
      placeholder="Insert URL to annotate..."
      onEnter={() => {
        /* Do something */
      }}
    />
  );
});
