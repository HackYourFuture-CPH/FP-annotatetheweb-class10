import React from 'react';
import { storiesOf } from '@storybook/react';
import imageHomePage from '../../assets/images/imageHomePage.jpg';
import HomePageImage from './HomePageImage.component';

storiesOf('HomePageImage', module).add('HomePageImage', () => {
  return <HomePageImage classImage="imageHome" homeImage={imageHomePage} />;
});
