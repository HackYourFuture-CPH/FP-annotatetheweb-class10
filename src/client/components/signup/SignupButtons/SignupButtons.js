import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-brands-svg-icons";
import "../signup.css";

const SignupButtons = ({ title, signupBtn, text, logo, signupBtnTxt }) => {
  function onClickHandler() {
    // shoul add the onclick function here
  }

  return (
    <button onclick={onClickHandler} className={signupBtn}>
      <FontAwesomeIcon icon={logo} className={text} />
      <h3 className={signupBtnTxt} icon={logo}>
        {title}
      </h3>
    </button>
  );
};
export default SignupButtons;
