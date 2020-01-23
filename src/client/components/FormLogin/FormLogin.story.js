import React from 'react';
import { storiesOf } from '@storybook/react';
import FormLogin from './FormLogin.component';

storiesOf('FormLogin', module).add('login', () => <FormLogin displayController="login-part"/>);
