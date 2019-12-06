import React from "react";
import "../signup.css";

const SignupEmailAddress = () => {
  return (
    <label>
      <div className="signupEmail"> Email Address</div>
      <input type="email" className="signupEmailBox"></input>
    </label>
  );
};
export default SignupEmailAddress;
