import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-brands-svg-icons";
import "../signup.css";

const SignupButtons = ({
  title,
  text,
  logo,
  align,
  signupBtnTxt,
  signupButton
}) => {
  function onClickHandler() {
    alert("your account has been created!");
  }

  return (
    <button onclick={onClickHandler} className={signupButton}>
      <FontAwesomeIcon icon={logo} className={text} className={align} />
      <h3 className={signupBtnTxt} icon={logo}>
        {title}
      </h3>
    </button>
  );
};
export default SignupButtons;
