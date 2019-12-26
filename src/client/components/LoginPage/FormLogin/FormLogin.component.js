import React, {Component} from 'react';
import './FormLogin.css';
import FormButton from '../FormButton/FormButton.component';
import FormField from '../FormField/FormField.component';
import FormTitle from '../FormTitle/FormTitle.component';
import FormLine from '../FormLine/FormLine.component';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import {faFacebookSquare, faTwitter} from '@fortawesome/free-brands-svg-icons';

class FormLogin extends Component {
  render () {
    return (
      <div className="login-wrapper">
        <div className="login-part">
          <FormTitle />
          ​
          <div className="social-media-button-wrapper">
            <FormButton
              title="Log In With Google"
              buttons="google-btn"
              logo={faGoogle}
              align="logo-align"
              click={this.props.onGoogleSignIn}
            />
            <FormButton
              title=""
              buttons="twitter-btn"
              logo={faTwitter}
              click={this.props.onTwitterSignIn}
            />
            <FormButton
              title=""
              buttons="facebook-btn"
              logo={faFacebookSquare}
              click={this.props.onFacebookSignIn}
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
            changeHandler={this.props.handleChange}
          />
          <FormField
            title="Password"
            text="login-input-label"
            box="boxclass"
            inputType="password"
            //   textHolder="enter password"
            inputClass="password-box"
            changeHandler={this.props.handleChange}
          />
          <div class="login-button-wrapper">
            <FormButton
              title="Log In"
              buttons="submit-btn"
              click={this.props.login}
              logo=""
            />
          </div>
          ​
        </div>
        ​
      </div>
    );
  }
}
export default FormLogin;
