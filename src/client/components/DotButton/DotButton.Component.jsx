import React from "react";
import List from "../List/List.Component";
const DotButton = props => {
    return(        
        <ul className="btn-right" >
            <List title={'...'}/>            
        </ul> 
    )        
}

export default DotButton;