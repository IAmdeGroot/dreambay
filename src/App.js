import React, { useState, useEffect } from "react";
import Card from "./card";
import Footer from "./footer";
import project from "./assets/camera.jpg";
import yellowLogo from "./assets/logo.png";
import darkLogo from "./assets4/logoDark.png";
import sunCloud from "./assets4/sunCloud.png";
import sun from "./assets4/sun.png";

import lightSky from "./assets2/lightSky.png";
import lightCloud1 from "./assets3/lightCloud1.png";
import lightCloud2 from "./assets3/lightCloud2.png";
import lightCloud3 from "./assets3/lightCloud3.png";
import lightCloud4 from "./assets3/lightCloud4.png";

import darkSky from "./assets4/Lager_5.png";
import darkCloud1 from "./assets4/Lager_1.png";
import darkCloud2 from "./assets4/Lager_2.png";
import darkCloud3 from "./assets4/Lager_3.png";
import darkCloud4 from "./assets4/Lager_4.png";
//import logo from "./assets4/Logga.png";
import Typist from "react-typist";
import "./App.scss";

function App() {
  const [viewMode, setViewMode] = useState("dark");
  const [logo, setLogo] = useState(darkLogo);
  const [cloud1, setCloud1] = useState(darkCloud1);
  const [cloud2, setCloud2] = useState(darkCloud2);
  const [cloud3, setCloud3] = useState(darkCloud3);
  const [cloud4, setCloud4] = useState(darkCloud4);
  const [sky, setSky] = useState(darkSky);
  const [sunLogo, setSunLogo] = useState(sun);

  const cursor = {
    show: true,
    blink: true,
    element: "|",
    hideWhenDone: true,
    hideWhenDoneDelay: 1000,
  };

  function castParallax() {
    const translate = document.querySelectorAll(".translate");

    window.addEventListener("scroll", () => {
      let scroll = window.pageYOffset;

      translate.forEach((element) => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * -speed}px)`;
      });
    });
  }

  const changeViewMode = () => {
    switch (viewMode) {
      case "dark":
        setViewMode("light");
        break;
      case "light":
        setViewMode("dark");
        break;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    castParallax();
  }, []);

  useEffect(() => {
    switch (viewMode) {
      case "dark":
        setCloud1(darkCloud1);
        setCloud2(darkCloud2);
        setCloud3(darkCloud3);
        setCloud4(darkCloud4);
        setSky(darkSky);
        setLogo(darkLogo);
        setSunLogo(sun);
        break;
      case "light":
        setCloud1(lightCloud1);
        setCloud2(lightCloud2);
        setCloud3(lightCloud3);
        setCloud4(lightCloud4);
        setSky(lightSky);
        setLogo(yellowLogo);
        setSunLogo(sunCloud);
        break;
      default:
        setCloud1(darkCloud1);
        setCloud2(darkCloud2);
        setCloud3(darkCloud3);
        setCloud4(darkCloud4);
        setSky(darkSky);
        setLogo(darkLogo);
        setSunLogo(sun);
        break;
    }
  }, [viewMode]);

  return (
    <>
      <div>
        <header>
          <nav>
            <div className="container">
              <h3 className="logo">
                dream<span>bay</span>
              </h3>
              <img src={sunLogo} className="hamburger-menu" onClick={() => changeViewMode()}/>
            </div>
          </nav>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={logo} alt="dreambay" className="big-title translate" data-speed="-0.5" />
          </div>

          <img
            src={cloud1}
            className="person translate responsive-width"
            data-speed="0"
            alt=""
          />
          {/* Not higher than 0.2 */}
          <img
            src={cloud2}
            className="mountain1 translate responsive-width"
            data-speed="-0.5"
            alt=""
          />
          <img
            src={cloud3}
            className="mountain2 translate responsive-width"
            data-speed="-0.7"
            alt=""
          />
          <img
            src={cloud4}
            className="mountain3 translate responsive-width"
            data-speed="-0.6"
            alt=""
          />

          <img
            src={sky}
            className="sky translate responsive-width"
            data-speed="0"
            alt=""
          />
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
                    <span> Animtion </span>
                    <Typist.Backspace count={7} delay={200} />
                    <span>imation och VFX </span>
                  </Typist>
                </h3>

                <p className="text">
                  Dreambay är en kreativ studio som lever för att berätta och
                  beröra med hjälp av rörliga bilder. Med film, design, VFX, 3D
                  och 2D-animation kan vi göra just det. Studion ligger ute på
                  Östergötlands landsbygd med utrymme till alla tänkbara idéer.
                  Vi har möjlighet att leverera filmer i hög nivå till hela
                  Sverige.
                </p>
              </div>
            </div>
            </div>

            <div className="container mb-4 opacity" data-speed="">
              <div className="row m-0">
                <div className="col-lg-12 col-md-12 col-xs-12 custom_center">
                  <Card url="https://player.vimeo.com/video/459658560"></Card>
                </div>
              </div>
            </div>
          
          <div className="color_section">
            <div className="container">
              <div className="row opacity mb-2">
                <div className="col-12">
                  <h3 className="title color-title">
                    Kontakta oss
                    <div className="border border_two"></div>
                  </h3>
                  <p className="text">
                    Vill du sammarbeta eller har du en idé eller ett projekt du
                    vill se framför dig? <br /> Hör av dig så bollar vi vidare
                    hur vi kan förverkliga den. <br/> <br/>
                    <a style={{color: "white"}} href="mailto:gustav@dreambay.se">gustav@dreambay.se</a> <br/>
                    <a style={{color: "white"}} href="phoneto:0703912946">0703912946</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row align-items-center content opacity mb-2">
              <div className="col-lg-6">
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
              <div className="col-lg-6">
                <img src={project} className="img-fluid mt-4"></img>
              </div>
            </div>
          </div>

          {/* <CustomModal isOpen={modalIsOpen} closeModal={closeModal}></CustomModal> */}
        </section>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
