import React from 'react';
import './sidebarMenu.css';

const Icon = (iconData) => {
    console.log(iconData.iconAlt)
  return (
    <button>
      <img class="icon-image" src={iconData.iconSrc} alt={iconData.iconAlt} />
    </button>
  );
};

export default Icon;
