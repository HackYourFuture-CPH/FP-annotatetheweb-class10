import React from 'react';
import { storiesOf } from '@storybook/react';
import Loading from './Loading.component';
import './Loading.css';

storiesOf('Loading', module)
  .add('Loading', () => (
    <Loading />
  ))