import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Button = ({iconName, buttonClasses, fontClasses}) => {
  return (
    <button className={buttonClasses}>
      <FontAwesomeIcon
        icon={iconName}
        // size="lg"
        className={fontClasses}
        fixedWidth
      />
    </button>
  );
};

export default Button;
