import React from 'react';
import Icon from './Icon';
import searchIcon from './icons/search.png';
import projectIcon from './icons/project.png';
import emailIcon from './icons/email.png';
import commentsIcon from './icons/comments.png';
import shareIcon from './icons/share.png';
import settingsIcon from './icons/settings.png';

const SidebarMenu = () => {
    return (
        <div className="side-menu">
            <Icon iconSrc={searchIcon} iconAlt="search" /> 
            <Icon iconSrc={projectIcon} iconAlt="project" /> 
            <Icon iconSrc={emailIcon} iconAlt="email" /> 
            <Icon iconSrc={commentsIcon} iconAlt="comments" /> 
            <Icon iconSrc={shareIcon} iconAlt="share" /> 
            <Icon iconSrc={settingsIcon} iconAlt="settings" /> 
        </div>
    )
}


export default SidebarMenu;