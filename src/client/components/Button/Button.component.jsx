import React from 'react';

const Button = ({ title, onClick, buttonClassName }) => {
  return (
    <button type="button" className= {buttonClassName} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
