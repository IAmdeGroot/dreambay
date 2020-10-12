import React from "react";
import "./css/footer.css";
import logo from "./assets4/logoDark.png";

const Footer = () => {
  return (
    <div className="footer">
      <img className="img-fluid footer-img" alt="dreambay" src={logo}></img>
      <span className="small mt-2">Website by Johan de Groot</span>
    </div>
  );
};

export default Footer;
