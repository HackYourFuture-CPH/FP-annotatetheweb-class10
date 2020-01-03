import React, {Component} from 'react';
import Header from '../Header/Header.Component';
import FormLoginRegister from './FormLoginRegister/FormLoginRegister.component';
import imageLogin from '../../assets/images/imageLogin.jpg';
import FormLogin from './FormLogin/FormLogin.component';
import './LoginPage.css';
import './FormLoginRegister/FormLoginRegister.css';
import FormButton from './FormButton/FormButton.component';
//import app from '../../firebase/configure';
import {auth, facebookProvider, googleProvider, twitterProvider} from '../../firebase/configure';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
      email: '',
      password: '',
      isLoading: false
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    auth.onAuthStateChanged((user) => {
      this.setState({isLoading: true});
      console.log(user);
      if (user) {
        this.setState({ user });        
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
      this.setState({isLoading: false});
    });
  }
  
  handleChange =(e) => {
    this.setState({ [e.target.type]: e.target.value });
  }

  login = (e) => {
    this.setState({isLoading: true});
    auth.signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      this.setState({isLoading: false});
    }).catch((error) => {
        console.log(error);
      });
  }
  logout = () => {
    auth.signOut();
  }
  signup = (e) => {
    auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  onGoogleSignIn = googleUser => {    
      console.log("google authentication");
      auth.signInWithPopup(googleProvider)
   .then((result, error) => {
    if(error){
      console.log(error)
    }
    else{

    }
   })
  };
 onFacebookSignIn = () => {
   auth.signInWithPopup(facebookProvider)
   .then((result, error) => {
    if(error){
      console.log(error)
    }
    else{

    }
   })
 }
onTwitterSignIn = () => {
  auth.signInWithPopup(twitterProvider)
   .then((result, error) => {
    if(error){
      console.log(error)
    }
    else{

    }
   })
}
  render () {
    return (
      <div className="main-wrapper-login-page">
        <div className="header-wrapper">
          <Header title="Annotate the web" />
          {!this.state.user?<FormLoginRegister
            formLoginRegister="form-login-register"
            text="Do not have account yet?"
            register="Register"
            classRegister="register-class"
            linewrapper="register-right-up-corner"
          />:null}
        </div>
        <div className="body-wrapper">
          <div className="image-wrapper">
            <img src={imageLogin} className="login-page-image" />
          </div>
          {!this.state.user?<FormLogin
            handleChange = {this.handleChange}
            login = {this.login}
            signup = {this.signup}
            onGoogleSignIn = {this.onGoogleSignIn}
            onFacebookSignIn = {this.onFacebookSignIn}
            onTwitterSignIn = {this.onTwitterSignIn} 
          />:<FormButton
          title="Log Out"
          buttons="logout-btn"
          click={this.logout}
          logo=""
        />}

        </div>
        <FormLogin />
      </div>
    );
  }
}

export default LoginPage;