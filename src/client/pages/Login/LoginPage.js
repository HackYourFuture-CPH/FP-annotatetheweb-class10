import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header/Header.Component';
import FormLoginRegister from '../../components/FormLoginRegister/FormLoginRegister.component';
import imageLogin from '../../assets/images/imageLogin.jpg';
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
      email: '',
      password: '',
      isLoading: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.type]: e.target.value });
  };

  login = () => {
    if (this.state.password && this.state.email) {
      this.setState({ isLoading: true });
    }
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({ isLoading: false });
      });
    this.getUserId(this.state.email);
  };

  onGoogleSignIn = async () => {
    try {
      this.setState({ isLoading: true });
      const result = await auth.signInWithPopup(googleProvider);
      const { user } = result;
      const { email } = user;
      this.getUserId(email);
    } catch (error) {
      return error;
    }
  };

  onFacebookSignIn = async () => {
    try {
      this.setState({ isLoading: true });
      const result = await auth.signInWithPopup(facebookProvider);
      const { user } = result;
      const { email } = user;
      this.getUserId(email);
    } catch (error) {
      return error;
    }
  };

  onTwitterSignIn = async () => {
    try {
      this.setState({ isLoading: true });
      const result = await auth.signInWithPopup(twitterProvider);
      const { user } = result;
      const { email } = user;
      this.getUserId(email);
    } catch (error) {
      return error;
    }
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
        const { user_id } = data[0];
        localStorage.setItem('user_id', JSON.stringify(user_id));
        // this.props.history.push('/'); // We get a warning with this: Can't perform a React state update on an unmounted component(...) 
        location.href = '/';
      });
  };

  render() {
    const { user, isLoading } = this.state;
    return (
      <div className="main-wrapper-login-page">
        <div className="header-wrapper">
          <Header title="Annotate the web" />
          {!user && !isLoading ? (
            <FormLoginRegister
              formLoginRegister="form-login-register"
              text="Do not have account yet? "
              register="Register"
              classRegister="register-class"
              linewrapper="register-right-up-corner"
              href='/register'
            />
          ) : null}
        </div>
        <div className="body-wrapper">
          <div className="image-wrapper">
            <img src={imageLogin} alt="login" className="login-page-image" />
          </div>
          {isLoading ? <Loading /> : null}
          {!isLoading && !user && (
            <FormLogin
              handleChange={this.handleChange}
              login={this.login}
              onGoogleSignIn={this.onGoogleSignIn}
              onFacebookSignIn={this.onFacebookSignIn}
              onTwitterSignIn={this.onTwitterSignIn}
              displayController="login-part-display-controller"
            />
          )}
          {user && (
            <FormButton
              title="Log Out"
              buttons="logout-btn"
              click={this.logout}
              logo=""
            />
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(LoginPage);
