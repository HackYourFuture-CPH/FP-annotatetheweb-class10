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
              click={() => console.log ('clicked')}
            />
            <FormButton
              title=""
              buttons="twitter-btn"
              logo={faTwitter}
              click={() => console.log ('clicked')}
            />
            <FormButton
              title=""
              buttons="facebook-btn"
              logo={faFacebookSquare}
              click={() => console.log ('clicked')}
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
            changeHandler={e => {
              e.target.value;
            }}
          />
          <FormField
            title="Password"
            text="login-input-label"
            box="boxclass"
            inputType="password"
            //   textHolder="enter password"
            inputClass="password-box"
            changeHandler={e => {
              e.target.value;
            }}
          />
          <div class="login-button-wrapper">
            <FormButton
              title="Log In"
              buttons="submit-btn"
              click={() => console.log ('submitted')}
              logo={null}
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
