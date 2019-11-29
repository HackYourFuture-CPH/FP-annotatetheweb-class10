//include both full name and user name added on storires/index.js
import React from 'react';
import '../signup.css';

const Name = ({title})=>{
    return(
        <label>
            <div className="signupUserNameTxt signupFullNameTxt"> 
                {title}
                </div>
            <input type="text"  className="signupUserNameBox signupFullNameBox"></input>
        </label>
    )
}
export default Name;