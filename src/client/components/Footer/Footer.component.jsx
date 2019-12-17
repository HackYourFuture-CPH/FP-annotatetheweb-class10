import React from "react";
import "./Footer.css";
import hyf_logo_black_background from "../../assets/images/hyf_logo_black_background.png";
import codeart_logo_black_background from "../../assets/images/codeart_logo_black_background.png";

const Footer = () => {
  return (
    <footer className="footer-btn">
      <div className="rectangle-btn"></div>
        <a
          href="https://www.hackyourfuture.dk"
          target="_blank"
        >
          <img className="footer-hyf-logo" src={hyf_logo_black_background} />
        </a>
        <a
          href="https://www.codeart.dk"
          target="_blank">
         <img className="footer-codeart-logo"src={codeart_logo_black_background} />
         </a>
      
    </footer>
  );
};
export default Footer;
