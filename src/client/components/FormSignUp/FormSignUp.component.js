import React, { Component } from 'react';
import './FormSignUp.css';
import FormButton from '../FormButton/FormButton.component';
import FormField from '../FormField/FormField.component';
import FormTitle from '../FormTitle/FormTitle.component';
import FormLine from '../FormLine/FormLine.component';
import {
  faGoogle,
  faFacebookSquare,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

class FormSignUp extends Component {
  render() {
    return (
      <div className="signup-wrapper">
        <div className="signup-part">
          <FormTitle
            formTitle="form-title"
            text="Sign up to Annotate the web"
          />
          <div className="social-media-button-wrapper">
            <FormButton
              title="Sign up with Google"
              buttons="google-btn"
              logo={faGoogle}
              align="logo-align"
              click={() => console.log('clicked')}
            />

            <FormButton
              title=""
              buttons="twitter-btn"
              logo={faTwitter}
              click={() => console.log('clicked')}
            />

            <FormButton
              title=""
              buttons="facebook-btn"
              logo={faFacebookSquare}
              click={() => console.log('clicked')}
            />
          </div>
          <FormLine />
          <div className="name-wrapper">
            <FormField
              title="Full Name"
              text="emaill"
              box="nameboxclass"
              inputType="text"
              inputClass="name-box"
              // changeHandler={(e) => {
              //   e.target.value;
              // }}
            />
            <FormField
              title="User Name"
              text="emaill"
              box="nameboxclass"
              inputType="text"
              inputClass="name-box"
              // changeHandler={(e) => {
              //   e.target.value;
              // }}
            />
          </div>
          <FormField
            title="Email Address"
            text="login-input-label"
            box="boxclass"
            inputType="email"
            inputClass="email-addres-box"
            // changeHandler={(e) => {
            //   e.target.value;
            // }}
          />
          <FormField
            title="Password"
            text="login-input-label"
            box="boxclass"
            inputType="password"
            inputClass="password-box"
            // changeHandler={(e) => {
            //   e.target.value;
            // }}
          />
          <div className="signup-button-wrapper">
            <FormButton
              title="Create Account"
              buttons="submit-btn"
              click={() => console.log('submitted')}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default FormSignUp;
