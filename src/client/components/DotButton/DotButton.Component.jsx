import React from "react";
//import List from "../List/List.Component";
const DotButton = props => {
    return(        
        <ul className="btn-right" >
            <button className="btn-right" onClick={props.onClickHandle} onBlur={props.onClickHandle}>
                {props.title}</button>           
        </ul> 
    )        
}

export default DotButton;