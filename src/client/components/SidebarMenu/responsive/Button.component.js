import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



const Button = ({icon, buttonClasses, fontClasses, onButtonClick}) => {
  return (
    <button className={buttonClasses} onClick={onButtonClick} >
      <FontAwesomeIcon
        icon={icon}
        size="lg"
        className={fontClasses}
        fixedWidth
      />
    </button>
  );
};

export default Button;
