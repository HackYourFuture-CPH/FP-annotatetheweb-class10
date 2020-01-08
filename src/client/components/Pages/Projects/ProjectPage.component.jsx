import React from 'react';
import SidebarMenu from '../../SidebarMenu/SidebarMenu.component';
import ProfileSummery from '../../ProfileSummary/ProfileSummary.component';
import Header from '../../Header/Header.Component';
import RegisterButton from '../../RegisterButton/RegisterButton.component';
import Button from '../../Button/Button.component';

const ProjectPage = () => {
  return (<div>
    <SidebarMenu />
    <Header />
    <Button title="Login"/>
    <RegisterButton />
    <ProfileSummery />

  </div>);
};

export default ProjectPage;
