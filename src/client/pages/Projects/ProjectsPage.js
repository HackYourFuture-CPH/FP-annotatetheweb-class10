import React, { Component } from 'react';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu.component';
import ProfileSummery from '../../components/ProfileSummary/ProfileSummary.component';
import Header from '../../components/Header/Header.Component';
import RegisterButton from '../../components/RegisterButton/RegisterButton.component';
import Button from '../../components/Button/Button.component';
import Footer from '../../components/Footer/Footer.component';
import samplePhoto from '../../assets/images/profile.png';
import './ProjectsPage.css';
// import MenuButton from '../../components/MenuButton/MenuButton.component';
import MessageParagraph from '../../components/MessageParagraph/MessageParagraph.component';
import BlogCardList from '../../container/BlogCardList/BlogCardList.component';
import { Consumer } from '../../context/AuthContext';
import Loading from '../../components/Loading/Loading.component';
import HomePageImage from '../../assets/images/HomePageImage.png';
import AnnotationWrapper from '../../components/Annotation/AnnotationWrapper';

class ProjectPage extends Component {
  state = {
    user: null,
    screenshotImage: '',
    screenshotsKey: ' ',
  };

  componentDidMount() {
    const screenshotsKey =
      JSON.parse(localStorage.getItem('screenshot_key')) || [];
    // eslint-disable-next-line react/no-unused-state
    this.setState({ screenshotsKey });
  }

  // eslint-disable-next-line react/sort-comp
  getScreenshotURL = () => {
    fetch(
      `https://api.annotatetheweb.com/screenshot/1.0/GetScreenshot?key=${this.state.screenshotsKey}`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((result) => result.json())
      .then((data) => {
        return data.url;
      })
      .catch((error) => {
        throw error;
      });
  };

  render() {
    const profile = {
      src: samplePhoto,
      alt: 'profile image',
    };

    console.log(this.getScreenshotURL(this.state.screenshotsKey));
    const headerTitle = 'Annotate the web';
    // eslint-disable-next-line no-unused-vars
    const backgroundImage = {
      src: HomePageImage,
      alt: 'sample screenshot',
    };
    return (
      <Consumer>
        {() => {
          return (
            <div>
              <div>{this.state.screenshotImage && <Loading />}</div>
              {!this.state.screenshotImage && (
                <div>
                  <div className="project-page-container">
                    <SidebarMenu />
                    <div className="screenshot-image-container">
                      <AnnotationWrapper
                        screenshotId={19}
                        screenshotURL={this.getScreenshotURL()}
                      />
                    </div>
                    <div className="project-page-rightside-container">
                      <div className="project-page-rightside-innerContainer">
                        <div>
                          <Header title={headerTitle} />
                        </div>
                        {this.state.user ? (
                          <div className="login-block">
                            <div>
                              <Button
                                buttonClassName="project-page-button"
                                title="Login"
                              />
                            </div>
                            <div>
                              <RegisterButton registerButtonTitle="Register" />
                            </div>
                          </div>
                        ) : (
                          <div className="profile-container">
                            <ProfileSummery
                              profileName="Kseiina Zar"
                              profileImage={profile}
                            />
                          </div>
                        )}
                      </div>
                      {this.state.annotations ? (
                        <BlogCardList annotations={this.state.annotations} />
                      ) : (
                        <MessageParagraph
                          className="no-comment-message"
                          message="For now you do not have any annotations:)"
                        />
                      )}
                    </div>
                  </div>
                  <div className="project-page-footer">
                    <Footer />
                  </div>
                </div>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default ProjectPage;
