import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './Header.Component';

storiesOf('Header', module).add('Header', () => {
  return <Header title="Annotate the web" />;
});
