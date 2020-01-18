import React, { Component } from 'react';
import { Consumer } from '../context/AuthContext';
import '../firebase';
import {
  doSignInWithEmailAndPassword,
  doSignOut,
} from '../firebase/auth';
import Header from '../components/Header/Header.Component';
import NavBar from '../components/NavBar/NavBar.component';
import imageHomePage from '../assets/images/HomePageImage.png';
import UrlInput from '../components/UrlInput/UrlInput.component';
import ToggleButton from '../components/ToggleButton/ToggleButton.component';
import Content from '../components/content/Content.component';
import Footer from '../components/Footer/Footer.component';
import hyf from '../assets/images/hyf.png';
import codeart from '../assets/images/codeart.png';
import MobileMenu from '../components/MobileMenu/MobileMenu.component';
import { themeContent } from '../components/theme';
import './HomePage.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      desktopSize: true,
      screenshotUrl: ''
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

  changeScreenshotSize = (val) => {
    this.setState({desktopSize: val})
  }

  async postData (url = '', data = {}) {
    const response = await fetch (url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return await response.json();
  }

  sendUrl = (value) => {
    this.setState({ screenshotUrl: value }, () => {
      // If user wants desktop size screenshot
      if (this.state.desktopSize) {
        const width = 1342;
        const height = 1152;
        // Url will need to be changed once the site is deployed??
        this.postData('http://localhost:3000/api/screenshots/', { url:  this.state.screenshotUrl, height, width, fk_project_id: 1})
        .then((data) => {
          console.log(data);
        })
        // If user wants mobile size screenshot
      } else {
        console.log('desktop size is ', this.state.desktopSize);
        const width = 640;
        const height = 960;
        // Url will need to be changed once the site is deployed??
        this.postData('http://localhost:3000/api/screenshots/', { url:  this.state.screenshotUrl, height, width, fk_project_id: 1})
        .then((data) => {
          console.log(data);
        })
      }
    });
    const screenshotUrl = this.state.screenshotUrl;
    console.log(this.state.screenshotUrl);
  }

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
                      { title: 'About', id: 2, href: 'http://codeart.dk/about/', target: "_blank" },
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
                      onChange={(val) => this.changeScreenshotSize(val)}
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