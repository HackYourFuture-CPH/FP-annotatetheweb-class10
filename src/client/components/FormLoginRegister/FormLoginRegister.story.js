import React from 'react';
import { storiesOf } from '@storybook/react';
import FormLoginRegister from './FormLoginRegister.component';

storiesOf('FormLoginRegister', module).add('register', () => (
  <FormLoginRegister
    formLoginRegister="form-login-register"
    text="Do not have account yet?"
    register="Register"
    classRegister="register-class"
    linewrapper="line-wrapper"
  />
));

