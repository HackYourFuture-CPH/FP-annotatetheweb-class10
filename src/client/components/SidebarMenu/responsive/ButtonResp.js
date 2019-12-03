import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const onButtonClick = () => {
  console.log ('SidebarMenu button was clicked');
};

const Button = ({iconName, buttonClasses, fontClasses}) => {
  return (
    <button className={buttonClasses} onClick={onButtonClick}>
      <FontAwesomeIcon
        icon={iconName}
        size="lg"
        className={fontClasses}
        fixedWidth
      />
    </button>
  );
};

export default Button;
