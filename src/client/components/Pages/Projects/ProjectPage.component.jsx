import React from 'react';
import SidebarMenu from '../../SidebarMenu/SidebarMenu.component';
import ProfileSummery from '../../ProfileSummary/ProfileSummary.component';
import Header from '../../Header/Header.Component';
import RegisterButton from '../../RegisterButton/RegisterButton.component';
import Button from '../../Button/Button.component';
import Footer from '../../Footer/Footer.component';
import samplePhoto from '../../../assets/images/profile.png';
import BlogCard from '../../../container/CommentBox/BlogCard.component';
import './ProjectPage.css';

const profile = {
  src: samplePhoto,
  alt: 'profile image',
};
const headerTitle = "annotate the web";

const ProjectPage = () => {
  return (<div className="project-page-container">
    <div>
      <SidebarMenu />
      <div className="project-page-rightside-container">
        <div>
          <Header title ={headerTitle}/>
        </div>
        
        <div >
          <Button className="project-page-button" title="Login"/>
        </div>
        
        <div >
          <RegisterButton title="Register"/>
        </div>
        
        <div className="profile-container">
          <ProfileSummery profileName="Kseiina Zar" profileImage={profile}/>
        </div>
        <div>
          <BlogCard />
        </div>
    </div>
      </div>
      
    <div className="project-page-footer">
      <Footer /> 
    </div>
      

  </div>);
};

export default ProjectPage;
