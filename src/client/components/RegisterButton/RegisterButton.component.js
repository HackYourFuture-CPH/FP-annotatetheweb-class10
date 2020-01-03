import React from 'react';
import './RegisterButton.css';

const RegisterButton = ({ title, onClick }) => {
  return (
    <button className="register-button" onClick={onClick} type="button">
      {title}
    </button>
  );
};

export default RegisterButton;
