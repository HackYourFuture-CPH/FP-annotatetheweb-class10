import React from 'react';
import { storiesOf } from '@storybook/react';
import FormTitle from './FormTitle.component';

storiesOf('FormTitle', module)
  .add('login form title', () => (
    <FormTitle formTitle="form-title" text="Login to Annotate the web" />
  ))
  .add('signup form title', () => (
    <FormTitle formTitle="form-title" text="Sign up to Annotate the web" />
  ));
