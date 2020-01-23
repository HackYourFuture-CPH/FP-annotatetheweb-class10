import React, {Component} from 'react';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu.component';
import ProfileSummery from '../../components/ProfileSummary/ProfileSummary.component';
import Header from '../../components/Header/Header.Component';
import RegisterButton from '../../components/RegisterButton/RegisterButton.component';
import Button from '../../components/Button/Button.component';
import Footer from '../../components/Footer/Footer.component';
import samplePhoto from '../../assets/images/profile.png';
import './ProjectsPage.css';
import MenuButton from '../../components/MenuButton/MenuButton.component';
import MessageParagraph from '../../components/MessageParagraph/MessageParagraph.component';
import BlogCardList from '../../components/ListOfBlogCard/ListOfBlogCard.component';

class ProjectPage extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      annotations: null
    };
  }
  
  render(){
    const profile = {
      src: samplePhoto,
      alt: 'profile image',
    };
    const headerTitle = "annotate the web";
    const screenshotImage= this.props;
    return (
      <div>
        <div className="project-page-container">
      <div>
        <SidebarMenu />
        <div className="mobilemenu-menuwrap">
          <div className="header-mobile">
            <Header title ={headerTitle}/>
          </div>
          <MenuButton />
        </div>
        <div className ="screenshot-image-container">
            <img alt="screenshot image of given url" src={screenshotImage} className="screenshot-image" />
        </div>

        <div className="project-page-rightside-container">
          <div className="project-page-rightside-innerContainer">
            <div>
              <Header title ={headerTitle}/>
            </div>
            {!this.state.user?
              <div>
                <div >
                  <Button buttonClassName="project-page-button" title="Login"/>
                </div>
                <div >
                  <RegisterButton registerButtonTitle="Register" />
                </div>
              </div>
            :
              <div className="profile-container">
                <ProfileSummery profileName="Kseiina Zar" profileImage={profile}/>
              </div>
              }
            </div>
            {this.state.annotations?
            <div className="comment-container">
              <BlogCardList annotations={this.state.annotations}/>
            </div>:
              <MessageParagraph className ="no-comment-message"
                message="For now you do not have any annotations:"/>
            }
          </div>
        </div>
        <div className="project-page-footer">
          <Footer />
        </div>
      </div>
    </div>
  );}
};

export default ProjectPage;
