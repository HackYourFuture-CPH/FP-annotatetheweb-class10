import React, {Component} from 'react';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu.component';
import ProfileSummery from '../../components/ProfileSummary/ProfileSummary.component';
import Header from '../../components/Header/Header.Component';
import RegisterButton from '../../components/RegisterButton/RegisterButton.component';
import Button from '../../components/Button/Button.component';
import Footer from '../../components/Footer/Footer.component';
import samplePhoto from '../../assets/images/profile.png';
import BlogCard from '../../container/CommentBox/BlogCard.component';
import imageLogin from '../../assets/images/imageLogin.jpg';
import './ProjectsPage.css';
import MenuButton from '../../components/MenuButton/MenuButton.component';
import MessageParagraph from '../../components/MessageParagraph/MessageParagraph.component';


class ProjectPage extends Component {
  constructor() {
      super();
      this.state = {
        user: null
      };
    }
    render(){
    const profile = {
      src: samplePhoto,
      alt: 'profile image',
    };
    const headerTitle = "annotate the web";
    return (
    <div className="project-page-container">
      <div>
        <SidebarMenu />
        <div className="mobilemenu-menuwrap">
          <div className="header-mobile">
            <Header title ={headerTitle}/>
          </div>
          <MenuButton />
        </div>
        <div>
            <img alt="login" src={imageLogin} className="login-page-image" />
        </div>

        <div className="project-page-rightside-container">
          <div className="project-page-rightside-innerContainer">
            <div>
              <Header title ={headerTitle}/>
            </div>


            {!this.state.user?(
              <div>
                <div >
                  <Button buttonClassName="project-page-button" title="Login"/>
                </div>
                <div >
                  <RegisterButton title="Register" />
                </div>
              </div>
            ):
            <div className="profile-container">
              <ProfileSummery profileName="Kseiina Zar" profileImage={profile}/>
            </div>
            }            
          </div>
          <MessageParagraph className ="no-comment-message" message="For now you do not have any annotations:"/>
          <div className="comment-container">
            <div>
              <BlogCard />
            </div>
            <div>
              <BlogCard />
            </div>
            <div>
              <BlogCard />
            </div>
          </div>

        </div>

      </div>
      <div className="project-page-footer">
        <Footer />
      </div>
    </div>);
  }

};

export default ProjectPage;
