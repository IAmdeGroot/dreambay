import React from 'react';
import css from './css/split.css';
import camera from './assets/camera.jpg'
import animation from './assets/animation.jpg'

const Split = () => {
return(
    <div className="container d-flex justify-content-center">
        <div className="row d-flex justify-content-center image-holder">
        <div className="img-fluid right-image image d-flex justify-content-center align-items-center">
            <div style={{color: "white", fontSize: '3rem'}}>FILM</div>
        </div>
            <div className="img-fluid left-image image d-flex justify-content-center align-items-center">
            <div style={{color: "white", fontSize: '3rem'}}>ANIMATION</div>
            </div>
        </div>
    </div>
);
}

export default Split