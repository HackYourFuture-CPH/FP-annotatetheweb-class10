import React from "react";
import List from "../../List/List.Component";
import PropTypes from 'prop-types';

const Anchor = props => {
    return(
      <div class="dropdown-content">
        <List  onClick={onClickHandler} title={'...'}/>
        <List title={'pin'}/>
        <List title = {'mark as done'} />
        <List title = {'send to Trolle'} />
      </div> 
    )         
}
function onClickHandler() {
  
}
// PropTypes
onClickHandler.propTypes = {
  onClickHandler: PropTypes.func.isRequired
}

export default Anchor;