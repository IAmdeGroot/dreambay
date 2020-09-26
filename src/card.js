import React from "react";

const Card = (props) => {
  return (
    <div className="d-flex justify-content-center embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item"
        src={props.url}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      >
      </iframe>
    </div>
  );
};

export default Card;
