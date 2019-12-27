import React from 'react';
import { storiesOf } from '@storybook/react';
import FormField from './FormField.component';

storiesOf('FormField', module)
  .add('Full name field', () => (
    <FormField
      title="Full Name"
      text="emaill"
      box="nameboxclass"
      inputType="text"
      inputClass="name-box"
      // changeHandler={(e) => {}}
    />
  ))
  .add('User name field', () => (
    <FormField
      title="User Name"
      text="emaill"
      box="nameboxclass"
      inputType="text"
      inputClass="name-box"
      // changeHandler={(e) => {}}
    />
  ))
  .add('email address field', () => (
    <FormField
      title="Email Address"
      text="emaill"
      box="boxclass"
      inputType="email"
      inputClass="email-addres-box"
      // changeHandler={(e) => {}}
    />
  ))

  .add('password field', () => (
    <FormField
      title="Password"
      text="emaill"
      box="boxclass"
      inputType="password"
      textHolder="6+ characters"
      inputClass="password-box"
      // changeHandler={(e) => {}}
    />
  ));
