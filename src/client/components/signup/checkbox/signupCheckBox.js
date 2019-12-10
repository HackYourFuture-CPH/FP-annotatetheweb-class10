import React from "react";
import "../signup.css";

const CheckBox = ({}) => {
  return (
    <label className="signupCheckBoxTxt">
      <input type="checkbox" />
      Creating an account means you're okey with our
      <a href="#">Terms of Services, Privacy Policy,</a>
      and our default
      <a href="#">Notification Settings.</a>
    </label>
  );
};
export default CheckBox;
