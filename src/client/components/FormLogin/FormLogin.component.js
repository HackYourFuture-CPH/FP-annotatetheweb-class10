import React from 'react';
import './FormLogin.css';
import FormButton from '../FormButton/FormButton.component';
import FormField from '../FormField/FormField.component';
import FormTitle from '../FormTitle/FormTitle.component';
import FormLine from '../FormLine/FormLine.component';
import {
  faGoogle,
  faFacebookSquare,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

function FormLogin(props) {
  return (
    <div className="login-wrapper">
      <div className={props.displayController}>
        <FormTitle />
        <div className="social-media-button-wrapper">
          <FormButton
            title="Log In With Google"
            buttons="google-btn"
            logo={faGoogle}
            align="logo-align"
            click={props.onGoogleSignIn}
          />
          <FormButton
            title=""
            buttons="twitter-btn"
            logo={faTwitter}
            click={props.onTwitterSignIn}
          />
          <FormButton
            title=""
            buttons="facebook-btn"
            logo={faFacebookSquare}
            click={props.onFacebookSignIn}
          />
        </div>
        <FormLine />
        <FormField
          title="Email Address"
          text="login-input-label"
          box="boxclass"
          inputType="email"
          //   textHolder="enter email here"
          inputClass="email-addres-box"
          changeHandler={props.handleChange}
        />
        <FormField
          title="Password"
          text="login-input-label"
          box="boxclass"
          inputType="password"
          //   textHolder="enter password"
          inputClass="password-box"
          changeHandler={props.handleChange}
        />
        <div className="login-button-wrapper">
          <FormButton
            title="Log In"
            buttons="submit-btn"
            click={props.login}
            logo=""
          />
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
