import React from "react";
import "../signup.css";

const SignupPassword = () => {
  return (
    <label>
      <div className="signup-password">Password</div>
      <input
        type="password"
        placeholder="6+ character"
        //onChange={this.handleChange}
        className="signup-passwordBox"
      />
    </label>
  );
};

export default SignupPassword;
