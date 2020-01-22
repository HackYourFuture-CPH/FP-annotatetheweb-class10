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
      userName: '',
      name: '',
      email: '',
      password: '',
      acceptedTermsAndPolicy: false,
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, () =>
      this.props.changeHandler(this.state),
    );
  };

  onClick = (event) => {
    if (this.state.acceptedTermsAndPolicy) {
      this.props.onClick(event, null);
      this.setState({
        name: '',
        userName: '',
        email: '',
        password: '',
        acceptedTermsAndPolicy: false,
      });
    } else {
      this.props.onClick(null, 'You need to agree with terms and and policy');
    }
  };

  changeAcceptedTermsAndPolicy = (event) => {
    this.setState({ acceptedTermsAndPolicy: event });
  };

  render() {
    const {
      signInWithGoogle,
      signInWithFacebook,
      signInWithTwitter,
    } = this.props;

    return (
      <div className="signup-wrapper">
        <div className="signup-part">
          <div>
            <FormTitle
              formTitle="form-title"
              text="Sign up to Annotate the web"
            />
          </div>
          <div>
            <div className="social-media-button-wrapper">
              <FormButton
                title="Sign up with Google"
                buttons="google-btn"
                logo={faGoogle}
                align="logo-align"
                click={signInWithGoogle}
              />

              <FormButton
                title=""
                buttons="twitter-btn"
                logo={faTwitter}
                click={signInWithTwitter}
              />

              <FormButton
                title=""
                buttons="facebook-btn"
                logo={faFacebookSquare}
                click={signInWithFacebook}
              />
            </div>
          </div>
          <div>
            <FormLine />
          </div>
          <div className="name-wrapper">
            <FormField
              text="name"
              name="name"
              textHolder=""
              title="Full Name"
              box="nameboxclass"
              inputType="text"
              inputClass="name-box"
              changeHandler={this.onChange}
            />
            <FormField
              autoComplete="off"
              name="userName"
              title="User Name"
              text="name"
              textHolder=""
              box="nameboxclass"
              inputType="text"
              inputClass="name-box"
              changeHandler={this.onChange}
            />
          </div>
          <FormField
            name="email"
            title="Email Address"
            text="name"
            box="boxclass"
            inputType="email"
            inputClass="email-addres-box"
            changeHandler={this.onChange}
          />
          <FormField
            name="password"
            title="Password"
            text="name"
            box="boxclass"
            inputType="password"
            inputClass="password-box"
            changeHandler={this.onChange}
          />
          <CheckBox
            onChange={this.changeAcceptedTermsAndPolicy}
            checkboxClass="check-box"
            linkClass="link-class"
            textNoLinkFirst="Creating an account means youre okey with our "
            textTermsOfServices="Terms of Service, Privacy Policy "
            textNoLinkLast="and our default "
            textNotificationsSettings="Notifications settings"
          />
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
