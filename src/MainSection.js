import React from "react";
import camera from "./assets/camera.jpg";
import css from "./css/mainsection.css";

const MainSection = (props) => {
  return (
    <div className="col-lg-6 box mt-2">
      <img className="img-fluid img-border" src={props.image}></img>
      <div className="text">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default MainSection;
