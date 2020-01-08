import React from "react";
import { storiesOf } from "@storybook/react";
import RegisterFormLogin from "./registerFormLogin.component";

storiesOf("RegisterFormLogin", module).add("already member", () => (
  <RegisterFormLogin
    registerFormLogin="-register-form-login"
    text="Already a member?"
    signin="Signin"
    classSignin="signin-class"
    linewrapper="line-wrapper"
  />
));
