import React from "react";
import Iframe from "react-iframe";
import ResponsiveEmbed from "react-responsive-embed";

const Card = (props) => {
  return (
    <div className="d-flex justify-content-center flex-column card_holder">
      <iframe style={{margin: "0 15px 0 15 px", minWidth: "260px", minHeight: "260px" }}
        src={props.url}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      >
      </iframe>
      {/* <iframe 
      src={props.url}
      height="100%"
      width="100%" 
      allowFullScreen="true"></iframe> */}
     <span className="text-center card_title">{props.title}</span>
    </div>
  );
};

export default Card;
