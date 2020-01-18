import React, {Component} from 'react';
import Header from '../Header/Header.Component';
import FormLoginRegister from './FormLoginRegister/FormLoginRegister.component';
import imageLogin from '../../assets/images/imageLogin.jpg';
import FormLogin from './FormLogin/FormLogin.component';
import './LoginPage.css';
import './FormLoginRegister/FormLoginRegister.css';
import FormButton from './FormButton/FormButton.component';
import Loading from '../Loading/Loading.component';
import {auth, facebookProvider, googleProvider, twitterProvider} from '../../firebase/configure';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      email: '',
      password: '',
      isLoading: false
    };
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
    if(this.state.password && this.state.email){
      this.setState({isLoading: true});
    }    
    auth.signInWithEmailAndPassword(this.state.email, this.state.password).then(()=>{
      this.setState({isLoading: false});
    })
  }
  logout = () => {
    auth.signOut();
  }
  signup = async (e) => {
    await auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{console.log(u)
    })    
  }
  onGoogleSignIn = googleUser => {    
      console.log("google authentication");
      auth.signInWithPopup(googleProvider)
   
  };
 onFacebookSignIn = () => {
   auth.signInWithPopup(facebookProvider)
   
 }
onTwitterSignIn = () => {
  auth.signInWithPopup(twitterProvider)
   
}
  render () {
    const { user, isLoading } = this.state;
    return (
      <div className="main-wrapper-login-page">
        <div className="header-wrapper">
          <Header title="Annotate the web" />
          {!user && !isLoading?<FormLoginRegister
            formLoginRegister="form-login-register"
            text="Do not have account yet?"
            register="Register"
            classRegister="register-class"
            linewrapper="register-mobile-version"
          />:null}
        </div>
        <div className="body-wrapper">
          <div className="image-wrapper">
            <img src={imageLogin} className="login-page-image" />
          </div>
          {isLoading?<Loading />:null}
          {!isLoading && !user &&<FormLogin
            handleChange = {this.handleChange}
            login = {this.login}
            signup = {this.signup}
            onGoogleSignIn = {this.onGoogleSignIn}
            onFacebookSignIn = {this.onFacebookSignIn}
            onTwitterSignIn = {this.onTwitterSignIn} 
            displayController="login-part-display-controller"
          />}
          {user && <FormButton
          title="Log Out"
          buttons="logout-btn"
          click={this.logout}
          logo=""
        />}
        </div>        
      </div>
    );
  }      
  
}

export default LoginPage;