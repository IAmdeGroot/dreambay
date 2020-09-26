import React from "react";
import "./css/footer.css";
import logo from "./assets/logowhite.png";

const Footer = () => {
  return (
    <div className="footer">
      <img className="img-fluid footer-img" alt="dreambay" src={logo}></img>
      <a style={{color: "white"}} className="footer-link" href="mailto: gustav@dreambay.se">
        gustav@dreambay.se
      </a>
      <a style={{color: "white"}} className="footer-link" href="phoneto:0703912946">0703912946</a>
      <span className="small mt-2">Website by Johan de Groot</span>
    </div>
  );
};

export default Footer;
