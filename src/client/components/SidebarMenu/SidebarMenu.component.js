import React from 'react';
import Icon from './Icon';
import searchIcon from './icons/search.png';

const SidebarMenu = () => {
    const search = "fas fa-search";
    console.log(searchIcon);
    return (
        <div className="side-menu">
            {/* <h1>icon</h1> */}
            {/* <img src={searchIcon} alt="search" /> */}
            <Icon iconSrc={searchIcon} iconAlt="search" /> 
        </div>
    )
}


export default SidebarMenu;