import React from 'react';
import Button from '../../components/Button/Button.component';
import dropdownStyle from './Them';

const DropDown = props => {
  
  return(
    <div className="dropdown-content" style={dropdownStyle}>
      { props.titleArray.map(element => <Button key={element.id} title={element.title} onClickHandle={props.onClickHandle}/> )}   
    </div> 
  )     
}

export default DropDown;