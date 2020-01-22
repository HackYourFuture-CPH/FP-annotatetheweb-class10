import React from 'react';
import './RegisterButton.css';

const RegisterButton = ({ onClick, registerButtonTitle }) => {
  return (
    <div className="register-button-wrapper">
      <button className="register-button" onClick={onClick} type="button">
        {registerButtonTitle}
      </button>
    </div>
  );
};

export default RegisterButton;