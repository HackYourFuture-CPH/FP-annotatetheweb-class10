import React from 'react';

const Button = ({ title, onClickHandle, buttonClassName }) => {
  return (
    <button type="button" className= {buttonClassName} onClick={onClickHandle}>
      {title}
    </button>
  );
};

export default Button;
