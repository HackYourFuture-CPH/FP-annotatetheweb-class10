import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ icon, buttonClasses, fontClasses, onClick }) => {
  return (
    <button type="button" className={buttonClasses} onClick={onClick}>
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
