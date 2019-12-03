import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



const Button = ({iconName, buttonClasses, fontClasses, onButtonClick}) => {
  return (
    <button className={buttonClasses} onClick={onButtonClick} >
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
