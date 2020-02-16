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
      screenshotsKey: ""
    };
  }
  async componentDidMount() {
    const screenshotsKey =
      JSON.parse(localStorage.getItem('screenshot_key')) || [];    
    this.setState({ screenshotsKey });
  }
  handleChange = (e) => {
    this.setState({ [e.target.type]: e.target.value });
  };

  onLoginClick = (event) => {
    event.preventDefault();
    if (this.state.password && this.state.email) {
      this.setState({ isLoading: true });
    }
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((data) => {
        this.setState({ isLoading: false });
        this.getUserId(data.user.uid);
      });
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
    })
    const data = await response.json();
    const { user_id } = data[0];
    localStorage.setItem('user_id', JSON.stringify(user_id));
    const screenshotsKey =
      JSON.parse(localStorage.getItem('screenshot_key')) || []; 
    if(screenshotsKey.length=== 0)
      this.props.history.push('/');
    else
      this.props.history.push('/projects');
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
              href="/register"
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
              login={this.onLoginClick}
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
