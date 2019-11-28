import React from "react";
import DotButton from "../../DotButton/DotButton.Component";
import DropDown from "../DropDown/DropDown.Component";
import Input from "../../Input/Input.Component";
import './blogCard.css';

const BlogCard = props => {
  
  return (
    <div className="blog-card">
      <div className="menu-right">                              
        <DotButton title={props.title}/>
        <DropDown />        
      </div>
      <Input name={props.name} title={props.title} placeholder={props.placeholder}/>
    </div>
  );
};

export default BlogCard;