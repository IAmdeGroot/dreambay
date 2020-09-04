import React, { useState, useEffect } from "react";
import Card from "./card";
import Header from "./header";
import Footer from "./footer";
import Split from "./split";
import logo from "./assets/Dreambay_logo.png";
import mountain3 from "./assets/mountain_3_00000.png"
import mountain2 from "./assets/mountain_2_00000.png"
import mountain1 from "./assets/mountain_1_00000.png"
import MainSection from "./MainSection";
import urlAnimationData from "./urlAnimationData.json";
import urlFilmData from "./urlFilmData.json";
import cameraimage from "./assets/camera.jpg";
import animationimage from "./assets/animation.jpg";
import { Parallax, Background } from 'react-parallax';
import "./App.scss";

function App() {

  function castParallax() {
    const translate = document.querySelectorAll(".translate");
    const big_title = document.querySelector(".big-title");
    const header = document.querySelector("header");
    const shadow = document.querySelector(".shadow");
    const content = document.querySelector(".content");
    const section = document.querySelector("section");
    const image_container = document.querySelector(".imgContainer");
    const opacity = document.querySelectorAll(".opacity");
    const border = document.querySelector(".border");
    
    let header_height = header.offsetHeight;
    let section_height = section.offsetHeight;
    
    window.addEventListener('scroll', () => {
        let scroll = window.pageYOffset;
        let sectionY = section.getBoundingClientRect();
        
        translate.forEach(element => {
            let speed = element.dataset.speed;
            element.style.transform = `translateY(${scroll * -(speed)}px)`;
        });
    
        opacity.forEach(element => {
            element.style.opacity = scroll / (sectionY.top + section_height);
        })
    
        big_title.style.opacity = - scroll / (header_height / 1) + 1;
        shadow.style.height = `${scroll * 0.5 + 300}px`;
    
        content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
        image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -20 + 50}px)`;
    
        border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
    })
  }

  useEffect(() => {
    castParallax();
  }, [])

  return(
    <>
  <header>
        <nav>
            <div className="container">
                <h3 className="logo">dream<span>bay</span></h3>
                <div className="hamburger-menu">
                    <div className="bar"></div>
                </div>
            </div>
        </nav>

         {/* <h1 className="big-title translate" data-speed="0.1">Discover.</h1> */}
        <div style={{display: "flex", justifyContent: "center"}}>
            <img style={{height: "300px", width: "300px", zIndex: "15", top: "400"}} src={logo} className="big-title translate" data-speed="0.8"/>
       </div>

        <img src={mountain1} className="person translate" data-speed="0.25" alt=""/>
        <img src={mountain2} className="mountain1 translate" data-speed="0.3" alt=""/>
        {/* <img src={mountain1} className="mountain2 translate" data-speed="-0.2" alt=""/> */}
        {/* <img src="img/mountain_2_00000.png" className="mountain3 translate" data-speed="-0.21" alt=""/>
        <img src="img/mountain_3_00000.png" className="mountain4 translate" data-speed="-0.25" alt=""/> */}
        <img src={mountain3} className="sky translate" data-speed="-0.25" alt=""/>
        <img src={mountain3} className="sky_two translate" data-speed="-0.25" alt=""/>
        <img src={mountain3} className="sky_three translate" data-speed="-0.25" alt=""/>
    </header>

    <section>
        <div className="shadow"></div>
        <div className="container">
            <div className="content opacity mb-2">
                <h3 className="title">
                    About
                    <div className="border"></div>
                </h3>
                <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque officiis quos expedita ipsa, a quidem inventore voluptates debitis accusamus tenetur qui et voluptas dicta, culpa earum, doloribus odio consectetur consequuntur soluta quasi nobis! Deserunt voluptatum reiciendis iure expedita sequi quisquam laboriosam temporibus exercitationem.</p>
            </div>
            <div className="imgContainer opacity" data-speed="">
              <div className="row">
                <div className="col-md-4 col-xs-12 mt-2">
                <img className="img-fluid" src={cameraimage} alt=""/>
                </div>
                <div className="col-md-4 col-xs-12 mt-2">
                <img src={cameraimage} alt=""/>
                </div>
                <div className="col-md-4 col-xs-12 mt-2">
                <img src={cameraimage} alt=""/>
                </div>
                </div>
            </div>
        </div>
    </section>
   
    </>
  );
}

export default App;
