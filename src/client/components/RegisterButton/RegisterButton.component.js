import React from 'react';
import './RegisterButton.css';

const RegisterButton = ({ onClick, registerButtonTitle }) => {
  return (
    <button className="register-button" onClick={onClick} type="button">
      {registerButtonTitle}
    </button>
  );
};

export default RegisterButton;
