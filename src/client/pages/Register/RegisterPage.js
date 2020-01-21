import React, { Component } from 'react';
import { Consumer } from '../../context/AuthContext';
import FormSignUp from '../../components/FormSignUp/FormSignUp.component';
import Header from '../../components/Header/Header.Component';
import FormLoginRegister from '../../components/FormLoginRegister/FormLoginRegister.component';
import './Register.css';

import {
  doCreateUserWithEmailAndPassword,
  signInWithGoogle,
  signInWithFacebook,
  signInWithTwitter,
} from '../../firebase/auth';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      user_name: '',
      email: '',
      password: '',
    };
  }

  fillUsersTable = (name, user_name) => {
    fetch('http://localhost:3000/api/users/', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        user_name,
        fk_role_id: 1,
      }),
    });
  };

  onRegisterClick = (event, errorMessage) => {
    if (!errorMessage) {
      event.preventDefault();
      doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(alert('New user is created'))
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error.message);
        });

      const { name, user_name } = this.state;
      this.fillUsersTable(name, user_name);

      this.setState({ email: '', password: '', name: '', user_name: '' });
    } else {
      //need popup or something similar
      console.log(errorMessage);
    }
  };

  signInWithGoogle = () => {
    signInWithGoogle()
      .then((user) => {
        console.log('User logged in, using google');
        this.fillUsersTable(user.displayName, user.displayName);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  signInWithFacebook = () => {
    signInWithFacebook()
      .then((user) => {
        console.log('User logged in, using facebook');
        this.fillUsersTable(user.displayName, user.displayName);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  signInWithTwitter = () => {
    signInWithTwitter()
      .then((user) => {
        console.log('User logged in, using twitter');
        this.fillUsersTable(user.displayName, user.displayName);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  onInputChange = ({ name, user_name, email, password }) => {
    this.setState({ name, user_name, email, password });
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
                  text="Already a member? "
                  register="Sign in"
                  href="/login"
                />
              </div>
              <div className="register-form">
                <FormSignUp
                  onClick={this.onRegisterClick}
                  changeHandler={this.onInputChange}
                  signInWithGoogle={this.signInWithGoogle}
                  signInWithFacebook={this.signInWithFacebook}
                  signInWithTwitter={this.signInWithTwitter}
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
