import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Consumer } from '../../context/AuthContext';
import '../../firebase';
import { doSignInWithEmailAndPassword, doSignOut } from '../../firebase/auth';
import Header from '../../components/Header/Header.Component';
import NavBar from '../../components/NavBar/NavBar.component';
import imageHomePage from '../../assets/images/HomePageImage.png';
import imageHomePageMobile from '../../assets/images/HomePageImageMobile.png';
import UrlInput from '../../components/UrlInput/UrlInput.component';
import ToggleButton from '../../components/ToggleButton/ToggleButton.component';
import Content from '../../components/content/Content.component';
import Footer from '../../components/Footer/Footer.component';
import hyf from '../../assets/images/hyf.png';
import codeart from '../../assets/images/codeart.png';
import MobileMenu from '../../components/MobileMenu/MobileMenu.component';
import { themeContent } from '../../components/theme';
import './HomePage.css';

class Home extends Component {
 hyfLogo = {
    src: hyf,
    alt: 'hyf logo',
  };

  codeartLogo = {
    src: codeart,
    alt: 'code:art logo',
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      desktopSize: true,
      screenshotUrl: '',
    };
  }

  onRegisterClick = () => {
    this.props.history.push('/register');
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
    this.setState({ desktopSize: val });
  };

  

  createScreenshot = (project_id, value, setScreenshotKey) => {
    this.setState({ screenshotUrl: value }, () => {
      // Check if desktop or mobile screenshot is requested
      if (this.state.desktopSize) {
        const width = 1342; // These numbers should be adjusted ??
        const height = 1152; // These numbers should be adjusted??
        // Url will need to be changed once the site is deployed??
        this.postData('/api/screenshots/', {
          url: this.state.screenshotUrl,
          height,
          width,
          fk_project_id: project_id,
        }).then((data) => {
          // Save screenshot into context
          console.log(data.key); // This will be removed before merging, left here for testing.
          setScreenshotKey(data.key);
          // this.props.history.push('/projects'); // this will be enabled before merging.
        });
        // If user wants mobile size screenshot
      } else {
        const width = 640; // These numbers should be adjusted ??
        const height = 960; // These numbers should be adjusted ??
        // Url will need to be changed once the site is deployed??
        this.postData('/api/screenshots/', {
          url: this.state.screenshotUrl,
          height,
          width,
          fk_project_id: project_id,
        }).then((data) => {
          // Save screenshot into context
          console.log(data.key); // This will be removed before merging, left here for testing.
          setScreenshotKey(data.key);
          // this.props.history.push('/projects'); // this will be enabled before merging.
        });
      }
    });
  };

  createProjectAndScreenshot = (value, user_id, setScreenshotKey) => {
    // Create new project - now there's a new project created with every screenshot.
    // If we have time, we can implement using the different project_ids. Right now  we shall prioritize other parts of this project.
    this.postData('/api/projects/', {
      name: value,
      fk_user_id: user_id,
    })
      .then((data) => {
        return data.project_id[0];
      })
      // Create screenshot, using the newly created project_id
      .then((project_id) =>
        this.createScreenshot(project_id, value, setScreenshotKey),
      );
  };

  sendUrl = (
    value,
    isAuthenticated,
    user_id,
    screenshot_key,
    setScreenshotKey,
  ) => {
    console.log('from context', screenshot_key);
    // If user is authenticated, use the corresponding user_id
    if (isAuthenticated === true) {
      this.createProjectAndScreenshot(value, user_id, setScreenshotKey);
    } else {
      // If user is not authenticated, use user_id=1 which is 'Random user'.
      this.createProjectAndScreenshot(value, 1, setScreenshotKey);
    }
  };

  onSubmit = () => {
    console.log('This feature is not ready yet, try it on desktop version.');
  };

  async postData (url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });
    return response.json();
  }

  render() {
    return (
      <Consumer>
        {({ isAuthenticated, user_id, screenshot_key, setScreenshotKey }) => {
          return (
            <>
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
                      {
                        title: 'About',
                        id: 2,
                        href: 'http://codeart.dk/about/',
                        target: '_blank',
                      },
                      { title: 'Login', id: 3, href: '/login' },
                    ]}
                    registerButtonTitle="Register"
                    onClick={this.onRegisterClick}
                  />
                )}
                <MobileMenu />
              </div>
              <div className="home-page-image-wrapper">
                <img
                  alt="home"
                  src={imageHomePage}
                  className="home-page-image"
                />
                <img
                  alt="home"
                  src={imageHomePageMobile}
                  className="home-page-image-mobile"
                />
                <div className="urlToggleBtn-wrapper">
                  <div className="url-Input">
                    <UrlInput
                      placeholder="Insert URL to annotate..."
                      onEnter={(value) =>
                        this.sendUrl(
                          value,
                          isAuthenticated,
                          user_id,
                          screenshot_key,
                          setScreenshotKey,
                        )
                      }
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
                  <div className="submit-btn-wrapper">
                    <button className="annotate-btn" onClick={this.onSubmit}>
                      Annotate
                    </button>
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
            </>
          );
        }}
      </Consumer>
    );
  }
}
export default withRouter(Home);
