import React, {Component} from 'react';
import Header from '../Header/Header.Component';
import FormLoginRegister
  from '../FormloginRegister/FormLoginRegister.component';
import imageLogin from '../../assets/images/imageLogin.jpg';
import Image from '../SignInImage/SignInImage.component';
import FormSignIn from '../FormSignIn/FormSignIn.component';
import './SignInPage.css';
import '../FormloginRegister/FormLoginRegister.css';

class SignInPage extends Component {
  render () {
    return (
      <div className="main-wrapper-login-page">
        <div className="header-wrapper">
          <Header title="Annotate the web" />
          <FormLoginRegister
            formLoginRegister="form-login-register"
            text="Do not have account yet?"
            register="Register"
            classRegister="register-class"
            linewrapper="register-right-up-corner"
          />
        </div>
        <div className="body-wrapper">
          <div className="image-wrapper">
            <Image classImage="login-page-image" loginImage={imageLogin} />
          </div>
          <FormSignIn />

        </div>
      </div>
    );
  }
}

export default SignInPage;
