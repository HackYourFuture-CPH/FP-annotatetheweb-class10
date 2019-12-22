import React from 'react';
import {storiesOf} from '@storybook/react';
import FormField from './FormField.component';

storiesOf ('FormField', module)
  .add ('email address field', () => (
    <FormField
      title="Email Address"
      text="emaill"
      box="boxclass"
      inputType="email"
      textHolder="enter email here"
      inputClass="email-addres-box"
      changeHandler={e => {
        e.target.value;
      }}
    />
  ))
  .add ('password field', () => (
    <FormField
      title="Password"
      text="emaill"
      box="boxclass"
      inputType="password"
      textHolder="enter password"
      inputClass="password-box"
      changeHandler={e => {
        e.target.value;
      }}
    />
  ));
