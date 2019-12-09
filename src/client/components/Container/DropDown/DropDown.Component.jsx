import React from "react";
import Button from "../../Button/Button.Component";

const DropDown = props => {
  const id = props.titleArray;
  return(
    <div class="dropdown-content" style={dropdownStyle}>
      { props.titleArray.map(element => <Button title={element.title} onClickHandle={props.onClickHandle}/> )}   
    </div> 
  )     
}
const dropdownStyle = {
  display: 'flex',
  zIndex: '4',
  marginTop: '25px'
}
export default DropDown;