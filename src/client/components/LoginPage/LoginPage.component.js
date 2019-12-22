import React, {Component} from 'react';
import Header from '../Header/Header.Component';
import FormLoginRegister from './FormLoginRegister/FormLoginRegister.component';
import imageLogin from '../../assets/images/imageLogin.jpg';
import FormLogin from './FormLogin/FormLogin.component';
import './LoginPage.css';
import './FormLoginRegister/FormLoginRegister.css';

class LoginPage extends Component {
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
            <img src={imageLogin} className="login-page-image" />
          </div>
          <FormLogin />

        </div>
      </div>
    );
  }
}

export default LoginPage;
