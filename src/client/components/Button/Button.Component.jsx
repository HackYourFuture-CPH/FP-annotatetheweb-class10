import React from "react";

const Button = props => {

    return(
    <button className={"btnComponent"} onClick={props.onClickHandle} 
        onBlur={props.onClickHandle}>{props.title}</button>
    )     
}

export default Button;