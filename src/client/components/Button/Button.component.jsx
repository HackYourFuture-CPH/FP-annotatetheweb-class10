import React from "react";

const Button = props => {

    return(
    <button className="button" onClick={props.onClickHandle}>{props.title}</button>
    )     
}

export default Button;