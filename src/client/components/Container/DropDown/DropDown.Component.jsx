import React from "react";
import Button from "../../Button/Button.Component";

const DropDown = props => {
  return(
    <div class="dropdown-content" style={dropdownStyle}>
      {props.titleArray.map(title => <Button title={title} onClickHandle={props.onClickHandle}/> )}   
    </div> 
  )     
}
const dropdownStyle = {
  display: 'flex',
  zIndex: '4',
  marginTop: '25px'
}
export default DropDown;