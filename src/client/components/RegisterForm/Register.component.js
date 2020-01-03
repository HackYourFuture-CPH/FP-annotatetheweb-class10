import React, { Component } from "react";
import "./Register.css";
import SignupTitle from "../signup/title/SignupTitle.component";
import SignupButtons from "../signup/SignupButtons/SignupButtons.component";
import SignupFormLine from "../signup/signupFormLine/signupFormLine.component";
import SignupTextFields from "../signup/signupTextFields/signupTextFields.component";
import CheckBox from "../signup/checkbox/signupCheckBox.component";
import {
  faTwitter,
  faGoogle,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

class RegisterForm extends Component {
  render() {
    return (
      <div className="register-wrapper">
        <div className="register-part">
          <SignupTitle />
          <div className="social-media-button">
            <SignupButtons
              title="Signup with Google"
              click={() => console.log("signed up with google!")}
              signupButton="signup-google-btn"
              logo={faGoogle}
              text="signup-google-txt"
              align="google-logo-align"
            />
            <SignupButtons
              logo={faTwitter}
              click={() => console.log("signed up with twitter!")}
              signupButton="twitter-btn"
            />
            <SignupButtons
              logo={faFacebook}
              click={() => console.log("signed up with facebook!")}
              signupButton="facebook-btn"
            />
          </div>
          <SignupFormLine />
          <div className="half-field-fullname">
            <SignupTextFields
              title="Full Name"
              id="fullname-block"
              box="fullname-label"
              inputType="text"
              inputClass="fullname-box"
              changeHandler={e => {
                e.target.value;
              }}
            />
          </div>
          <div className="half-field-username">
            <SignupTextFields
              title="Username"
              id="username-block"
              box="username-label"
              inputType="text"
              inputClass="username-box"
              changeHandler={e => {
                e.target.value;
              }}
            />
          </div>
          <SignupTextFields
            title="Email Address"
            box="email-label"
            inputType="email"
            inputClass="email-address-box"
            changeHandler={e => {
              e.target.value;
            }}
          />
          <SignupTextFields
            title="Password"
            box="password-label"
            inputType="password"
            textHolder="6 + Characters"
            inputClass="password-box"
            changeHandler={e => {
              e.target.value;
            }}
          />
          <CheckBox
            onChange={value => console.log(value)}
            checkboxClass="check-box"
            linkClass="link-class"
            textNoLinkFirst="Creating an account means youre okey with our "
            textTermsOfServices="Terms of Service, Privacy Policy "
            textNoLinkLast="and our default "
            textNotificationsSettings="Notifications settings"
          />
          <div className="signup-button-wrapper">
            <SignupButtons
              title="Create Account"
              click={() => console.log("account created!")}
              signupButton="create-account-btn"
              signupBtnTxt="signup-create-account-txt"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default RegisterForm;
