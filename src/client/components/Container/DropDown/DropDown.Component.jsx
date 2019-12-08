import React from "react";
import Button from "../../Button/Button.Component";
import dropdownStyle from "./Them";

const DropDown = props => {
  const id = props.titleArray;
  return(
    <div class="dropdown-content" style={dropdownStyle}>
      { props.titleArray.map(element => <Button title={element.title} onClickHandle={props.onClickHandle.bind(this,element.id)}/> )}   
    </div> 
  )     
}

export default DropDown;