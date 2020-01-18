import React, { Component } from 'react';
import { Consumer } from '../../context/AuthContext';
import FormSignUp from '../../components/FormSignUp/FormSignUp.component';
import Header from '../../components/Header/Header.Component';
import FormLoginRegister from '../../components/FormLoginRegister/FormLoginRegister.component';
import './Register.css';

import { doCreateUserWithEmailAndPassword, signInWithGoogle } from '../../firebase/auth';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    signInWithGoogle()
      .then(alert('New user is created'))
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error.message);
      });
  };

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
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
                href='/login'
              />
              </div>
              <div class="register-form">
              <FormSignUp
                onClick={this.onRegisterClick}
                onChange={this.onInputChange}
                googleSignIn={this.googleSignIn}
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
