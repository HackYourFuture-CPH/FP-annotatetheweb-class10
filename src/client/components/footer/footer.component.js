import React from "react";
import "./footer.css";
import hyf_logo_black_background from "../../assets/images/hyf_logo_black_background.png";
import codeart_logo_black_background from "../../assets/images/codeart_logo_black_background.png";

const Footer =  ({footerBtn})=> {
  return (
    <footer className="footer-btn">
      <div className="footer-links-wrapper">
      <a href="https://www.hackyourfuture.dk" target="_blank">
        <img className="footer-hyf-logo" src={hyf_logo_black_background} />
      </a> 
      <a href="https://www.codeart.dk" target="_blank">
        <img className="footer-codeart-logo" src={codeart_logo_black_background}
        />
      </a>
      </div>
      </footer>
  );
};
export default Footer;
