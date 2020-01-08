import React, { Component } from "react";
import RegisterFormLogin from "../../registerFormLogin/registerFormLogin.component";
import Header from "../../Header/Header.Component";
import image from "../../../assets/images/signup-frame.png";
import RegisterForm from "../../RegisterForm/Register.component";
import "./RegisterPage.css";
import "../../registerFormLogin/registerFormLogin.css";
class RegisterPage extends Component {
  render() {
    return (
      <div className="main-wrapper-register-page">
        <div className="header-wrapper">
          <Header title="Annotate the web" />
          <RegisterFormLogin
            registerFormLogin="register-form-login"
            text="Already a member?"
            signin="Signin"
            classSignin="signin-class"
            linewrapper="line-wrapper"
          />
        </div>
        <div className="body-wrapper">
          <div className="image-wrapper">
            <img
              className="signup-frame-img"
              src={image}
              alt="Signup image frame"
            />
          </div>
          <div className="register-form">
            <RegisterForm />
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
