import React from "react";

const Input = props => {

    return(
        <div className="inputBox">
            <label for={props.name} className="blog-card-label">
                {props.title}
            </label>
            <input
                className="blog-card-control"       
                type={props.inputType}       
                onKeyDown={props.handleInputChange}
                placeholder={props.placeholder}        
            /> 
        </div>
    )   
}

export default Input;
