import React from "react";
import Iframe from "react-iframe";

const Card = (props) => {
  return (
    <div className="col-md-6 col-lg-4 col-xs-12 my-5 img-fluid">
      {/* <Iframe
        url={props.url}
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        height="100%"
        width="100%"
        allowFullScreen
      /> */}
      <iframe 
      src={props.url}
      height="100%"
      width="100%" 
      allowfullscreen="true"></iframe>
    </div>
  );
}

export default Card;
