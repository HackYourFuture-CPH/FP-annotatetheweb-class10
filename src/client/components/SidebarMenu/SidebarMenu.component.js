import React from 'react';
import './sidebarMenu.css';
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
            <Icon iconSrc={searchIcon} iconAlt="search" imgClass="icon-image active"/> 
            <Icon iconSrc={projectIcon} iconAlt="project" imgClass="icon-image inactive" /> 
            <Icon iconSrc={emailIcon} iconAlt="email" imgClass="icon-image inactive"/> 
            <Icon iconSrc={commentsIcon} iconAlt="comments" imgClass="icon-image active" /> 
            <Icon iconSrc={shareIcon} iconAlt="share" imgClass="icon-image active"/> 
            <Icon iconSrc={settingsIcon} iconAlt="settings" imgClass="icon-image inactive" /> 
        </div>
    )
}


export default SidebarMenu;