import React from "react";
import { Link } from "@reach/router";
import "./Header.css";
const Header = props => {
  return (
    <div className="header">
      <h1 className="logo">{props.title}</h1>
    </div>
  );
};

export default Header;
