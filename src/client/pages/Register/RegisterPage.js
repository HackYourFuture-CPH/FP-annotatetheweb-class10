import React, { Component, Redirect } from 'react';
import { withRouter } from 'react-router-dom';

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
    fetch('/api/users/', {
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
      this.props.history.push('/');
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
        this.props.history.push('/');
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
        this.props.history.push('/');
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
        this.props.history.push('/');
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
            <div className="register-wrapper">
              <div className="register-page">
                <div className="register-head">
                  <Header title="Annotate the web" />
                </div>
                <div className="register-content">
                  <FormSignUp
                    onClick={this.onRegisterClick}
                    changeHandler={this.onInputChange}
                    signInWithGoogle={this.signInWithGoogle}
                    signInWithFacebook={this.signInWithFacebook}
                    signInWithTwitter={this.signInWithTwitter}
                  ></FormSignUp>
                  <FormLoginRegister
                    text="Already a member? "
                    register="Sign in"
                    href="/login"
                    linewrapper="register-link-to-login-page"
                  />
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default withRouter(RegisterPage);
