import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
      userName: '',
      email: '',
      password: '',
    };
  }

  fillUsersTable = (name, userName, email) => {
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
        user_name: userName,
        email,
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

      const { name, userName, email } = this.state;
      this.getUserId(email);
      this.fillUsersTable(name, userName, email);

      this.setState({ email: '', password: '', name: '', userName: '' });
      this.props.history.push('/');
    } else {
      // eslint-disable-next-line no-console
      console.log(errorMessage);
    }
  };

  signInWithGoogle = () => {
    signInWithGoogle()
      .then((user) => {
        console.log('User logged in, using google', user);
        this.fillUsersTable(user.displayName, user.displayName, user.email);
        this.getUserId(user.email);
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
        this.fillUsersTable(user.displayName, user.displayName, user.email);
        this.getUserId(user.email);
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
        this.fillUsersTable(user.displayName, user.displayName, user.email);
        this.getUserId(user.email);
        this.props.history.push('/');
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  onInputChange = ({ name, userName, email, password }) => {
    this.setState({ name, userName, email, password });
  };

  getUserId = (email) => {
    fetch(`/api/users/email/${email}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((result) => result.json())
      .then((data) => {
        // Save user into local storage
        let user_id = data[0].user_id;
        localStorage.setItem('user_id', JSON.stringify(user_id));
      });
  };

  render() {
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
            />
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
  }
}
export default withRouter(RegisterPage);
