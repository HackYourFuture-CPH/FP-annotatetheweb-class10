import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-btn">
      <div className="rectangle-btn"></div>
      <div className="content-btn">
        Created by:
        <a
          href="https://www.hackyourfuture.dk"
          target="_blank"
          className="content-logos"
        >
          HACK YOUR FUTURE
        </a>
        <br />
        and
        <a
          href="https://www.codeart.dk"
          target="_blank"
          className="content-logos"
        >
          Code: art
        </a>
      </div>
    </footer>
  );
};
export default Footer;
