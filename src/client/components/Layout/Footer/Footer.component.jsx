import React from "react";
import "./Footer.css";

const Footer = ({}) => {
  return (
    <footer className="footer">
      <div className="content">
        Created by
        <a href="https://www.hackyourfuture.dk" target="_blank">
          {" "}
          HACK YOUR FUTURE{" "}
        </a>
        and
        <a href="https://www.codeart.dk" target="_blank">
          {" "}
          Code: art{" "}
        </a>
      </div>
    </footer>
  );
};
export default Footer;
