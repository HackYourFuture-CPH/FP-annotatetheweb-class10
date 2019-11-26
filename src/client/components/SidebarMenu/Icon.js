import React from 'react';
import './sidebarMenu.css';

const Icon = (iconData) => {
    console.log(iconData)
  return (
    <button>
      <img  src={iconData.iconSrc} alt={iconData.iconAlt} className={iconData.imgClass}/>
    </button>
  );
};

export default Icon;
