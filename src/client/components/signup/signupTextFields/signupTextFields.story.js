import React from 'react';
import { storiesOf } from '@storybook/react';
import SignupTextFields from './signupTextFields.component';

storiesOf('Form Components', module)
  .add('email address field', () => (
    <SignupTextFields
      title="Email Address"
      box="email-label"
      inputType="email"
      inputClass="email-address-box"
      // changeHandler={() => {}}
    />
  ))

  .add('password field', () => (
    <SignupTextFields
      title="Password"
      box="password-label"
      inputType="password"
      textHolder="6 + Characters"
      inputClass="password-box"
      // changeHandler={() => {}}
    />
  ))
  .add('Full Name field', () => (
    <SignupTextFields
      title="Full Name"
      box="fullname-label"
      inputType="text"
      inputClass="fullname-box"
      // changeHandler={() => {}}
    />
  ))
  .add('Username field', () => (
    <SignupTextFields
      title="Username"
      box="username-label"
      inputType="text"
      inputClass="username-box"
      // changeHandler={() => {}}
    />
  ));
