import React from 'react';

const Icon = (iconData) => {
    console.log(iconData.iconAlt)
  return (
    <button>
      <img src={iconData.iconSrc} alt={iconData.iconAlt} />
    </button>
  );
};

export default Icon;
