import React from 'react';

const Button = ({ title, onClickHandle }) => {
  return (
    <button type="button" className="button" onClick={onClickHandle}>
      {title}
    </button>
  );
};

export default Button;
