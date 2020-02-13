import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu.component';
import ProfileSummery from '../../components/ProfileSummary/ProfileSummary.component';
import Header from '../../components/Header/Header.Component';
import RegisterButton from '../../components/RegisterButton/RegisterButton.component';
import Button from '../../components/Button/Button.component';
import Footer from '../../components/Footer/Footer.component';
import samplePhoto from '../../assets/images/profile.png';
import './ProjectsPage.css';
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
    screenshotId: null,
    annotations: [],
    userName: '',
    haveAnnotations: false
  };

  async getUser() {
    const userId = JSON.parse(localStorage.getItem('user_id')) || null;
    if(userId){
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      this.setState({user});
      const userName = user[0].name;
      this.setState({ userName });
    }    
  }

  async componentDidMount() {
    const screenshotsKey =
      JSON.parse(localStorage.getItem('screenshot_key')) || [];
    const screenshotId =
      JSON.parse(localStorage.getItem('screenshot_id')) || null;
      this.getUser();
    this.setState({ screenshotsKey, screenshotId }, this.reloadAnnotations);
  }

  // eslint-disable-next-line react/sort-comp
  getScreenshotURL = (screenshotKey) => {
    const apiEndpoint = 'https://annotatetheweb.z16.web.core.windows.net/';
    return `${apiEndpoint + screenshotKey}/screenshot.jpg`;
  };

  async reloadAnnotations() {
    const response = await fetch(
      `/api/annotations/screenshot/${this.state.screenshotId}`,
    );
    const annotations = await response.json();
      this.setState({ annotations });
      if(this.state.annotations[0]){
        this.setState({haveAnnotations: true});
    }    
  }
  onRegisterClick = () => {
    this.props.history.push('/register');
  };

  render() {
    const profile = {
      src: samplePhoto,
      alt: 'profile image',
    };

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
                        screenshotId={this.state.screenshotId}
                        screenshotURL={this.getScreenshotURL(
                          this.state.screenshotsKey,
                        )}
                        annotations={this.state.annotations}
                        onAnnotationSaved={() => this.reloadAnnotations()}
                      />
                    </div>
                    <div className="project-page-rightside-container">
                      <div className="project-page-rightside-innerContainer">
                        <div>
                          <Header title={headerTitle} />
                        </div>
                        {!this.state.user ? (
                          <div className="login-block">
                            <div>
                              <Button
                                buttonClassName="project-page-button"
                                title="Login"
                              />
                            </div>
                            <div>
                              <RegisterButton registerButtonTitle="Register" onClick={this.onRegisterClick}/>
                            </div>
                          </div>
                        ) : (
                          <div className="profile-container">
                            <ProfileSummery
                              profileName={this.state.userName}
                              profileImage={profile}
                            />
                          </div>
                        )}
                      </div>
                      {this.state.haveAnnotations ? (
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

export default withRouter(ProjectPage);
