//include both full name and user name added on storires/index.js
import React from "react";
import "../signup.css";

// consist of both Username and full name text label and text field boxes
const Name = ({ title }) => {
  return (
    <label>
      <div className="signupUserNameTxt signupFullNameTxt">{title}</div>
      <input
        type="text"
        className="signupUserNameBox signupFullNameBox"
      ></input>
    </label>
  );
};
export default Name;
