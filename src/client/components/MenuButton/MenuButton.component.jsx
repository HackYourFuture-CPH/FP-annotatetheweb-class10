import React from 'react';
import './MenuButton.css';

// eslint-disable-next-line react/prop-types
const MenuButton = ({ buttonClassName }) => {
  return (
    <button type="button" className={buttonClassName} onClick={onClickHandle}>
      <div className="line-top" />
      <div className="line-middle" />
      <div className="line-bottom" />
    </button>
  );
};

const onClickHandle = () => {
  this.classList.toggle('change');
};
export default MenuButton;
