import React from 'react';
import { storiesOf } from '@storybook/react';
import imageLogin from '../../assets/images/imageLogin.jpg';
import Image from './SignInImage.component';

storiesOf('Image', module).add('Image', () => {
  return <Image classImage="image" loginImage={imageLogin} />;
});
