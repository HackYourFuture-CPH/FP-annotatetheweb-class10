import React from "react";
import { storiesOf } from "@storybook/react";
import SignupTextFields from "./signupTextFields";

storiesOf("Form Components", module)
  .add("email address field", () => (
    <SignupTextFields
      title="Email Address"
      box="email-label"
      inputType="email"
      inputClass="email-address-box"
      changeHandler={e => {
        e.target.value;
      }}
    />
  ))

  .add("password field", () => (
    <SignupTextFields
      title="Password"
      box="password-label"
      inputType="password"
      textHolder= "+6 Character"
      inputClass="password-box"
      changeHandler={e => {
        e.target.value;
      }}
    />
  ))
  .add("Full Name field", () => (
    <SignupTextFields
      title="Full Name"
      box="fullname-label"
      inputType="text"
      inputClass="fullname-box"
      changeHandler={e => {
        e.target.value;
      }}
    />
  ))
  .add("Username field", () => (
    <SignupTextFields
      title="Username"
      box="username-label"
      inputType="text"
      inputClass="username-box"
      changeHandler={e => {
        e.target.value;
      }}
    />
  ));
