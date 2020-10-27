import React from "react";
import "./css/footer.css";
import logo from "./assets5/footerlogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="col-xs-12 col-md-4 d-flex justify-content-center">Dreambay Studios AB</div>
      <div className="col-xs-12 col-md-4 d-flex justify-content-center">
      <img className="img-fluid footer-img" alt="dreambay" src={logo}></img>
      </div>
      <div className="col-xs-12 col-md-4 d-flex justify-content-center">Norsholm 61792</div>
    </div>
  );
};

export default Footer;
