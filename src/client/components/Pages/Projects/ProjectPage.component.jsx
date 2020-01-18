import React, {Component} from 'react';
import SidebarMenu from '../../SidebarMenu/SidebarMenu.component';
import ProfileSummery from '../../ProfileSummary/ProfileSummary.component';
import Header from '../../Header/Header.Component';
import RegisterButton from '../../RegisterButton/RegisterButton.component';
import Button from '../../Button/Button.component';
import Footer from '../../Footer/Footer.component';
import samplePhoto from '../../../assets/images/profile.png';
import BlogCard from '../../../container/CommentBox/BlogCard.component';
import imageLogin from '../../../assets/images/imageLogin.jpg';
import './ProjectPage.css';


class ProjectPage extends Component {

  
   myFunction=(x)=> {
    x.classList.toggle("change");
  }
  onclickHandler=()=>{
   
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
          <div className="container" onclick={this.onclickHandler}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>  
        <div>
            <img alt="login" src={imageLogin} className="login-page-image" />
          </div>   
        <div className="project-page-rightside-container">
          <div className="project-page-rightside-innerContainer">
            <div>
              <Header title ={headerTitle}/>
            </div>
            
            <div >
              <Button buttonClassName="project-page-button" title="Login"/>
            </div>
            
            <div >
              <RegisterButton title="Register" />
            </div>
            
            <div className="profile-container">
              <ProfileSummery profileName="Kseiina Zar" profileImage={profile}/>
            </div>
          </div>
          <div className ="no-comment-message">
            For now you do not have any annotations:
          </div>
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
