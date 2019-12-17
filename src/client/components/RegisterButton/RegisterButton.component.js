import React from "react";
import { createGlobal } from "@storybook/theming";
import "./RegisterButton.css";

const RegisterButton = ({ title , onClick }) => {
  return <button className="register-button" onClick ={onClick} >{title}</button>;
};

export default RegisterButton;
