import React from 'react';
import './MenuButton.css';

const MenuButton = ({ buttonClassName }) => {
  return (
    <button type="button" className= {buttonClassName} onClick={onClickHandle}>
        <div className="line-top"></div>
        <div className="line-middle"></div>
        <div className="line-bottom"></div>
    </button>
  );
};

const onClickHandle=()=> {
    this.classList.toggle("change");
  }
export default MenuButton;
