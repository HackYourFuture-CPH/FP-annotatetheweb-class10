import React from "react";
import "../signup.css";

const SignupPassword = () => {
  return (
    <label>
      <div className="signupPassword">Password</div>
      <input
        type="password"
        placeholder="6+ character"
        //onChange={this.handleChange}
        className="signupPasswordBox"
      />
    </label>
  );
};

export default SignupPassword;
