import React, { Component } from 'react';
import './FormSignUp.css';
import FormButton from '../FormButton/FormButton.component';
import FormField from '../FormField/FormField.component';
import FormTitle from '../FormTitle/FormTitle.component';
import FormLine from '../FormLine/FormLine.component';
import CheckBox from '../signup/checkbox/signupCheckBox.component';
import {
  faGoogle,
  faFacebookSquare,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

class FormSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      email: '',
      password: '',
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, () =>
      this.props.changeHandler(this.state),
    );
  };

  onClick = (event) => {
    this.props.onClick(event);
    this.setState({ user_name: '', email: '', password: '' });
  };

  render() {
    console.log('state', this.state);

    const { googleSignIn, signInWithFacebook } = this.props;

    return (
      <div className="signup-wrapper">
        <div className="signup-part">
          <div>
            <FormTitle
              formTitle="form-title"
              text="Sign up to Annotate the web"
            />
          </div>
          <div className="social-media-button-wrapper">
            <FormButton
              title="Sign up with Google"
              buttons="google-btn"
              logo={faGoogle}
              align="logo-align"
              click={googleSignIn}
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
              click={signInWithFacebook}
            />
          </div>
          <FormLine />
          <div className="name-wrapper">
            <FormField
              name="user_name"
              title="Full Name"
              box="nameboxclass"
              inputType="text"
              inputClass="name-box"
              changeHandler={this.onChange}
            />
            <FormField
              title="User Name"
              text="emaill"
              box="nameboxclass"
              inputType="text"
              inputClass="name-box"
              changeHandler={this.onChange}
            />
          </div>
          <FormField
            name="email"
            title="Email Address"
            text="login-input-label"
            box="boxclass"
            inputType="email"
            inputClass="email-addres-box"
            changeHandler={this.onChange}
          />
          <FormField
            name="password"
            title="Password"
            text="login-input-label"
            box="boxclass"
            inputType="password"
            inputClass="password-box"
            changeHandler={this.onChange}
          />
          <CheckBox
            onChange={(value) => console.log(value)}
            checkboxClass="check-box"
            linkClass="link-class"
            textNoLinkFirst="Creating an account means youre okey with our "
            textTermsOfServices="Terms of Service, Privacy Policy "
            textNoLinkLast="and our default "
            textNotificationsSettings="Notifications settings"
          ></CheckBox>
          <div className="signup-button-wrapper">
            <FormButton
              title="Create Account"
              buttons="submit-btn"
              click={this.onClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default FormSignUp;
