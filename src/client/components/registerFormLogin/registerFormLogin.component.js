import React from "react";
import "./registerFormLogin.css";

const RegisterFormLogin = ({
  registerFormLogin,
  text,
  signin,
  classSignin,
  linewrapper
}) => {
  return (
    <div className={linewrapper}>
      <div className={registerFormLogin}>
        {text}{" "}
        <a href="" className={classSignin}>
          {signin}{" "}
        </a>
      </div>
    </div>
  );
};
export default RegisterFormLogin;
