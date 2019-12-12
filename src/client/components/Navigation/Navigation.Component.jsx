import React from "react";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div className="navigation">
      <div className="register-btn">
        <div className="register-btn-shape"></div>
        <div className="register-txt">
          <a href="/register">Register</a>
        </div>
      </div>
      <div className="navigate">
        <div className="annotate-btn">
          <a href="/annotate">Annotate</a>
        </div>
        <div className="nav-btn-line"></div>
        <div className="about-btn">
          <a href="/about">about</a>
        </div>
        <div className="login-btn">
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
