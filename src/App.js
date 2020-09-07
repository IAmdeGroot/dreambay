import React, { useState, useEffect } from "react";
import Card from "./card";
import Header from "./header";
import Footer from "./footer";
import Split from "./split";
import logo from "./assets/logo.png";
import mountain3 from "./assets/mountain_3_00000.png";
import mountain2 from "./assets/mountain_2_00000.png";
import mountain1 from "./assets/mountain_1_00000.png";
import sky from "./assets/sky.png";
import cloud1 from "./assets/cloud1.png";
import cloud2 from "./assets/cloud2.png";
import cloud3 from "./assets/cloud3.png";
import cloud4 from "./assets/cloud4.png";

import sky2 from "./assets2/Background.png";
// import moln1 from "./assets2/moln_1.png";
// import moln2 from "./assets2/moln_2.png";
// import moln3 from "./assets2/moln_3.png";
// import moln4 from "./assets2/moln_4.png";

import moln1 from "./assets3/moln_1_gray_00000.png";
import moln2 from "./assets3/moln_2__00000.png";
import moln3 from "./assets3/moln_3_00000.png";
import moln4 from "./assets3/moln_4_00000.png";

import MainSection from "./MainSection";
import urlAnimationData from "./urlAnimationData.json";
import urlFilmData from "./urlFilmData.json";
import cameraimage from "./assets/camera.jpg";
import animationimage from "./assets/animation.jpg";
import { Parallax, Background } from "react-parallax";
import CustomModal from "./CustomModal";
import Typist from "react-typist";
import "./App.scss";

function App() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const cursor = {
    show: true,
    blink: true,
    element: "|",
    hideWhenDone: true,
    hideWhenDoneDelay: 1000,
  };

  function castParallax() {
    const translate = document.querySelectorAll(".translate");
    const big_title = document.querySelector(".big-title");
    const header = document.querySelector("header");
    const shadow = document.querySelector(".shadow");
    const content = document.querySelector(".content");
    const section = document.querySelector("section");
    const image_container = document.querySelector(".imgContainer");
    const opacity = document.querySelectorAll(".opacity");
    const border = document.querySelector(".border_one");
    const bordertwo = document.querySelector(".border_two");
    const borderthree = document.querySelector(".border_three");

    let header_height = header.offsetHeight;
    let section_height = section.offsetHeight;

    window.addEventListener("scroll", () => {
      let scroll = window.pageYOffset;
      let sectionY = section.getBoundingClientRect();

      translate.forEach((element) => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * -speed}px)`;
      });

      // opacity.forEach(element => {
      //     element.style.opacity = scroll / (sectionY.top + section_height);
      // })

      // big_title.style.opacity = - scroll / (header_height / 1) + 1;
      // shadow.style.height = `${scroll * 0.5 + 300}px`;

      //content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 70}px)`;
      //image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -20 + 150}px)`;

      // border.style.width = `${scroll / (sectionY.top + section_height) * 10}%`;
      // bordertwo.style.width = `${scroll / (sectionY.top + section_height) * 10}%`;
      // borderthree.style.width = `${scroll / (sectionY.top + section_height) * 10}%`;
    });
  }

  // function openModal() {
  //   setModalIsOpen(true);
  //   document.body.style.overflow = "hidden";
  // }

  // function closeModal() {
  //   setModalIsOpen(false);
  //   document.body.style.overflow = "visible";
  // }

  useEffect(() => {
    window.scrollTo(0,0);
    castParallax();
  }, []);

  return (
    <>
      <div>
        <header>
          <nav>
            <div className="container">
              <h3 className="logo">
                dream<span>bay</span>
              </h3>
              <div className="hamburger-menu">
                <div className="bar"></div>
              </div>
            </div>
          </nav>

          {/* <h1 className="big-title translate" data-speed="0.1">Discover.</h1> */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={logo} className="big-title translate" data-speed="-0.8" />
          </div>

          <img
            src={moln1}
            className="person translate responsive-width"
            data-speed="0"
            alt=""
          />
          {/* Not higher than 0.2 */}
          <img
            src={moln2}
            className="mountain1 translate responsive-width"
            data-speed="-0.5"
            alt=""
          />
          <img
            src={moln3}
            className="mountain2 translate responsive-width"
            data-speed="-0.7"
            alt=""
          />
          <img
            src={moln4}
            className="mountain3 translate responsive-width"
            data-speed="-1.05"
            alt=""
          />
          {/* <img src="img/mountain_3_00000.png" className="mountain4 translate" data-speed="-0.25" alt=""/> */}
          <img
            src={sky2}
            className="sky translate responsive-width"
            data-speed="0"
            alt=""
          />
          {/* <img src={cloud1} className="sky_two translate" data-speed="-0.25" alt=""/>
        <img src={cloud2} className="sky_three translate" data-speed="-0.25" alt=""/> */}
        </header>

        <section>
          {/* <div className="shadow"></div> */}
          <div className="container">
            <div className="content opacity mb-2">
              <div className="col-12">
                <h3 className="title">
                  <Typist
                    className="text"
                    startDelay={4000}
                    stdTypingDelay={20}
                    avgTypingDelay={100}
                    cursor={cursor}
                  >
                    
                    <span> Aboout </span>
                    <Typist.Backspace count={7} delay={200} />
                    <span> About </span>
                  </Typist>

                  <div className="border border_one"></div>
                </h3>

                <p className="text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eaque officiis quos expedita ipsa, a quidem inventore
                  voluptates debitis accusamus tenetur qui et voluptas dicta,
                  culpa earum, doloribus odio consectetur consequuntur soluta
                  quasi nobis! Deserunt voluptatum reiciendis iure expedita
                  sequi quisquam laboriosam temporibus exercitationem.
                </p>
              </div>
            </div>

            <div className="imgContainer opacity" data-speed="">
              <div className="row evenly m-0">
                <div className="col-lg-3 col-md-12 col-xs-12 m-2 custom_center">
                  {/* <img onClick={openModal} className="img-fluid" src={cameraimage} alt=""/> */}
                  {/* <span>3D-ANIMATION</span> */}
                  <Card
                    title={"3D-ANIMATION"}
                    url="https://player.vimeo.com/video/347012109"
                  ></Card>
                </div>
                <div className="col-lg-3 col-md-12 col-xs-12 m-2 custom_center">
                  <Card
                    title={"VFX"}
                    url="https://player.vimeo.com/video/117371486"
                  ></Card>
                  {/* <img src={cameraimage} alt=""/>
                <span>VFX</span> */}
                </div>
                <div className="col-lg-3 col-md-12 col-xs-12 m-2 custom_center">
                  <Card
                    title={"2D-ANIMATION"}
                    url="https://player.vimeo.com/video/406372846"
                  ></Card>
                  {/* <img src={cameraimage} alt=""/>
                <span>2D-ANIMATION</span> */}
                </div>
              </div>
            </div>
          </div>

          <div className="blue_section">
            <div className="container">
              <div className="row content opacity mb-2">
                <div className="col-12">
                  <h3 className="title">
                    Kontakta oss
                    <div className="border border_two"></div>
                  </h3>
                  <p className="text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eaque officiis quos expedita ipsa, a quidem inventore
                    voluptates debitis accusamus tenetur qui et voluptas dicta,
                    culpa earum, doloribus odio consectetur consequuntur soluta
                    quasi nobis! Deserunt voluptatum reiciendis iure expedita
                    sequi quisquam laboriosam temporibus exercitationem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row content opacity mb-2">
              <div className="col-12">
                <h3 className="title">
                  Projekt just nu
                  <div className="border border_three"></div>
                </h3>
                <p className="text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eaque officiis quos expedita ipsa, a quidem inventore
                  voluptates debitis accusamus tenetur qui et voluptas dicta,
                  culpa earum, doloribus odio consectetur consequuntur soluta
                  quasi nobis! Deserunt voluptatum reiciendis iure expedita
                  sequi quisquam laboriosam temporibus exercitationem.
                </p>
              </div>
            </div>
          </div>

          {/* <CustomModal isOpen={modalIsOpen} closeModal={closeModal}></CustomModal> */}
        </section>
      </div>
    </>
  );
}

export default App;
