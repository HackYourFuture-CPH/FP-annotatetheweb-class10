import React, { Component } from 'react';
import { Consumer } from '../../context/AuthContext';
import FormSignUp from '../../components/FormSignUp/FormSignUp.component';
import Header from '../../components/Header/Header.Component';
import FormLoginRegister from '../../components/FormLoginRegister/FormLoginRegister.component';
import './Register.css';

import {
  doCreateUserWithEmailAndPassword,
  signInWithFacebook,
} from '../../firebase/auth';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      email: '',
      password: '',
    };
  }

  onRegisterClick = (event) => {
    event.preventDefault();
    doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.setState({ email: '', password: '' }))
      .then(alert('New user is created'))
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error.message);
      });
  };

  googleSignIn = (event) => {
    event.preventDefault();
    // signInWithGoogle()
    //   .then(alert('New user is created'))
    //   .catch((error) => {
    //     // eslint-disable-next-line no-console
    //     console.log(error.message);
    //   });
  };

  signInWithFacebook = (event) => {
    event.preventDefault();
    signInWithFacebook()
      .then(alert('New user is crated'))
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error.message);
      });
  };

  onInputChange = ({ user_name, email, password}) => {
    this.setState({ user_name, email, password });
  };

  render() {
    return (
      <Consumer>
        {({ isAuthenticated }) => {
          return (
            <div className="register-page">
              <div className="register-head">
                <Header title="Annotate the web" />
                <FormLoginRegister
                  text="Already a member?"
                  register="Sign in"
                  href="/login"
                />
              </div>
              <div className="register-form">
                <FormSignUp
                  onClick={this.onRegisterClick}
                  changeHandler={this.onInputChange}
                  googleSignIn={this.googleSignIn}
                  signInWithFacebook={signInWithFacebook}
                ></FormSignUp>
              </div>
              <p>Am I signed In: {isAuthenticated ? 'yes' : 'no'}</p>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default RegisterPage;
