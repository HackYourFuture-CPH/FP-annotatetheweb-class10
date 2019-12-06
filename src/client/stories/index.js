import React from "react";
import { storiesOf } from "@storybook/react";
import SignupEmailAddress from "../components/signup/signupTextFields/signupEmailAddressTxtField";
import SignupTitle from "../components/signup/title/signupTitle";
import "@fortawesome/free-brands-svg-icons";
import {
  faGoogle,
  faTwitter,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import SignupButtons from "../components/signup/SignupButtons/SignupButtons";
import SignupFormLine from "../components/signup/signupFormLine/signupFormLine";
import CheckBox from "../components/signup/checkbox/signupCheckBox";
import Name from "../components/signup/signupTextFields/signupUserName";
import SignupPassword from "../components/signup/signupTextFields/signupPassword";

storiesOf("components", module)
// signupEmailAddressTxtField (Story)
  .add("signup EmailAddress Textfield", () => <SignupEmailAddress />)
  // signupPassword (Story)
  .add("Signup Password", () => <SignupPassword />)
  // signupUserName -->FullName (Story)
  .add("signup FullName Textfield", () => <Name title="Username" />)
  // signupUserName -->UserName (Story)
  .add("signup UserName TextField", () => <Name title="Full Name" />)
  // signuptitle (Story)
  .add("signup Title", () => <SignupTitle />)
  // signupButton -->Google Button (Story)
  .add("signup Google Button", () => (
    <SignupButtons
      title="Signup with Google"
      signupButton="googleSignupButton"
      logo={faGoogle}
      text="signupBtnTxt"
      align="googleLogoAlign"
    />
  ))
  // signupButton -->Create account (Story)
  .add("signup Create Account", () => (
    <SignupButtons
      title="Create Account"
      signupButton="CreateAccountBtn"
      signupBtnText="signupCreateAccountTxt"
    />
  ))
  // signupbutton -->Twitter (Story)
  .add("signup Twitter Button", () => (
    <SignupButtons logo={faTwitter} signupBtn="twitterBtn" />
  ))
  // signupbutton -->Facebook (Story)
  .add("signup Facebook Button", () => (
    <SignupButtons logo={faFacebook} signupBtn="facebookBtn" />
  ))
  // signupCheckBox (Story)
  .add("Signup Form Checked", () => <CheckBox />)
  // signupFormLine (Story)
  .add("signup Form Line (Or)", () => <SignupFormLine />);
