import React from "react";
import List from "../../List/List.Component";

const DropDown = props => {
  return(
    <div class="dropdown-content">
      <List title={'...'}/>
      <List title={'pin'}/>
      <List title = {'mark as done'} />
      <List title = {'send to Trolle'} />
    </div> 
  )     
}

export default DropDown;