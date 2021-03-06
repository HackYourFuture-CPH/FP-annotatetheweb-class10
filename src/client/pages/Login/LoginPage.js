import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header/Header.Component';
import FormLoginRegister from '../../components/FormLoginRegister/FormLoginRegister.component';
import imageLogin from '../../assets/images/imageLogin.jpg';
import '../Register/Register.css';
import FormLogin from '../../components/FormLogin/FormLogin.component';
import './LoginPage.css';
import '../../components/FormLoginRegister/FormLoginRegister.css';
import FormButton from '../../components/FormButton/FormButton.component';
import Loading from '../../components/Loading/Loading.component';
import {
  auth,
  facebookProvider,
  googleProvider,
  twitterProvider,
} from '../../firebase/configure';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      email: null,
      password: null,
      isLoading: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.type]: e.target.value });
  };

  onEnter = (event) => {
    if (event.key === 'Enter') {
      this.onLoginClick(event);
    }
  };

  onLoginClick = (event) => {
    event.preventDefault();
    if (this.state.password && this.state.email) {
      auth
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((data) => {
          this.getUserId(data.user.uid);
          this.props.history.push('/');
        })
        .catch((error) => {
          if (error.code === 'auth/wrong-password') {
            alert('Wrong password. Please try again.');
          } else if (error.code === 'auth/user-not-found') {
            alert('Email not found.');
          } else {
            alert("There's something wrogn. Try again.");
          }
          this.getUserId(this.state.email);
        });
    } else {
      alert('Please type your username and password.');
    }
  };

  onGoogleSignIn = async () => {
    try {
      this.setState({ isLoading: true });
      const result = await auth.signInWithPopup(googleProvider);
      const { user } = result;
      const { uid } = user;
      this.getUserId(uid);
    } catch (error) {
      return error;
    }
  };

  onFacebookSignIn = async () => {
    try {
      this.setState({ isLoading: true });
      const result = await auth.signInWithPopup(facebookProvider);
      const { user } = result;
      const { uid } = user;
      this.getUserId(uid);
    } catch (error) {
      return error;
    }
  };

  onTwitterSignIn = async () => {
    try {
      this.setState({ isLoading: true });
      const result = await auth.signInWithPopup(twitterProvider);
      const { user } = result;
      const { uid } = user;
      this.getUserId(uid);
    } catch (error) {
      return error;
    }
  };

  getUserId = async (uid) => {
    const response = await fetch(`/api/users/uid/${uid}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    const { user_id } = data[0];
    localStorage.setItem('user_id', JSON.stringify(user_id));
    this.props.history.push('/');
  };

  render() {
    const { user, isLoading } = this.state;
    return (
      <div className="register-wrapper">
        <div className="login-page">
          <div className="register-head">
            <Header title="Annotate the web" />
          </div>
          <div className="register-content">
            {isLoading ? <Loading /> : null}
            {!isLoading && !user && (
              <>
                <FormLogin
                  handleChange={this.handleChange}
                  login={this.onLoginClick}
                  onGoogleSignIn={this.onGoogleSignIn}
                  onFacebookSignIn={this.onFacebookSignIn}
                  onTwitterSignIn={this.onTwitterSignIn}
                  onKeyDown={this.onEnter}
                />
                <FormLoginRegister
                  text="Do not have account yet? "
                  register="Register"
                  linewrapper="register-link-to-login-page"
                  href="/register"
                />
              </>
            )}
            {/* {user && (
              <FormButton
                title="Log Out"
                buttons="logout-btn"
                click={this.logout}
                logo=""
              />
            )} */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginPage);
