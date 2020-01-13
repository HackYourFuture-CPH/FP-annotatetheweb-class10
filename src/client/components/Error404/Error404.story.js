import React from 'react';
import { storiesOf } from '@storybook/react';
import ErrorToHome from './Error404.component';

storiesOf('ErrorToHome', module).add('ErrorToHome', () => (
  <ErrorToHome
    errorWrapper='error-wrapper'
    errorMessage="error-text1"
    errorMessage2="error-text2"
    text1="Look Like You're Lost?"
    text2="the page you are looking for not available "
    home="Go to Home"
    classLink="link-wrapper"
    classError="error-link"
  />
));
