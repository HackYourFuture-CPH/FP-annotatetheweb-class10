import React, { Component } from 'react';
import { Consumer } from '../../../context/AuthContext';
import '../../../firebase';
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
  doSignOut,
} from '../../../firebase/auth';
import Header from '../../Header/Header.Component';
import NavBar from '../../NavBar/NavBar.component';
import imageHomePage from '../../../assets/images/HomePageImage.png';
import UrlInput from '../../UrlInput/UrlInput.component';
import ToggleButton from '../../ToggleButton/ToggleButton.component';
import Content from '../../content/Content.component';
import Footer from '../../Footer/Footer.component';
import hyf from '../../../assets/images/hyf.png';
import codeart from '../../../assets/images/codeart.png';
import MobileMenu from '../../MobileMenu/MobileMenu.component';
import { themeContent } from '../../theme';
import './HomePage.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  hyfLogo = {
    src: hyf,
    alt: 'hyf logo',
  };

  codeartLogo = {
    src: codeart,
    alt: 'code:art logo',
  };

  onRegisterClick = () => {
    return (location.href = '/register');
  };

  onLoginClick = () => {
    event.preventDefault();
    doSignInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.setState({ email: '', password: '' }))
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error.message);
      });
  };

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  sendUrl = () => {
    return (location.href = '/projects');
  };

  render() {
    return (
      <Consumer>
        {({ isAuthenticated }) => {
          return (
            <React.Fragment>
              <div className="homeheader-wrapper">
                <Header title="Annotate the web" />
                {isAuthenticated ? (
                  <NavBar
                    navElements={[
                      { title: 'Annotate', id: 1, href: '/' },
                      { title: 'About', id: 2, href: '/' },
                    ]}
                    registerButtonTitle="Log out"
                    onClick={doSignOut}
                  />
                ) : (
                  <NavBar
                    navElements={[
                      { title: 'Annotate', id: 1, href: '/' },
                      { title: 'About', id: 2, href: '/' },
                      { title: 'Login', id: 3, href: '/login' },
                    ]}
                    registerButtonTitle="Register"
                    onClick={this.onRegisterClick}
                  />
                )}
                <MobileMenu />
              </div>
              <div className="home-page-image">
                <img
                  alt="login"
                  src={imageHomePage}
                  className="home-page-image"
                />
                <div className="urlToggleBtn-wrapper">
                  <div className="url-Input">
                    <UrlInput
                      placeholder="Insert URL to annotate..."
                      onEnter={this.sendUrl}
                    />
                  </div>
                  <div className="toggle-btn">
                    <ToggleButton
                      // eslint-disable-next-line no-console
                      onChange={(val) => console.log(val)}
                      activeText="Desktop"
                      inactiveText="Mobile"
                    />
                  </div>
                </div>
              </div>

              <div className="content-wrapper">
                <Content
                  title="About project"
                  text="This tool will help you to annotate any webpage that you want, collaborate with others and share your comments."
                  hyfLogo={this.hyfLogo}
                  codeartLogo={this.codeartLogo}
                  theme={themeContent}
                />
              </div>
              <div className="footer-wrapper">
                <Footer />
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Home;
