import React, { useState, useEffect } from "react";
import Card from "./card";
import darkLogo from "./assets4/logoDark.png";
import sun from "./assets4/sun.png";
import darkSky from "./assets5/Background.png";
import darkCloud1 from "./assets5/Lager_1.png";
import darkCloud2 from "./assets5/Lager_2.png";
import darkCloud3 from "./assets5/Lager_3.png";
import darkCloud4 from "./assets5/Lager_4.png";
import "./App.scss";
import flyingGif from "./assets5/2D_Process.gif";
import houseGif from "./assets5/3D_Process.gif";
import vfxGif from "./assets5/VFX_Process.gif";
import Footer from "./footer.js";

function App() {
  const [logo, setLogo] = useState(darkLogo);
  const [cloud1, setCloud1] = useState(darkCloud1);
  const [cloud2, setCloud2] = useState(darkCloud2);
  const [cloud3, setCloud3] = useState(darkCloud3);
  const [cloud4, setCloud4] = useState(darkCloud4);
  const [sky, setSky] = useState(darkSky);
  const [sunLogo, setSunLogo] = useState(sun);
  const [firstBoxVisible, setFirstBoxVisible] = useState(false);
  const [secondBoxVisible, setSecondBoxVisible] = useState(false);
  const [thirdBoxVisible, setThirdBoxVisible] = useState(false);

  function castParallax() {
    const translate = document.querySelectorAll(".translate");

    window.addEventListener("scroll", () => {
      let scroll = window.pageYOffset;

      translate.forEach((element) => {
        let speed = element.dataset.speed;
        //element.style.transform = `translateY(${scroll * -speed}px)`;
        element.style.webkitTransform = `translateY(${scroll * -speed}px)`;
        // element.style.MozTransform = `translateY(${scroll * -speed}px)`;
        // element.style.msTransform = `translateY(${scroll * -speed}px)`;
        // element.style.OTransform = `translateY(${scroll * -speed}px)`;
        //element.style.transform = `translateY(${scroll * -speed}px)`;
      });
    });
  }

  const onFirstBoxClick = () => {
    setFirstBoxVisible(!firstBoxVisible);
  };

  const onSecondBoxClick = () => {
    setSecondBoxVisible(!secondBoxVisible);
  };

  const onThirdBoxClick = () => {
    setThirdBoxVisible(!thirdBoxVisible);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    castParallax();
  }, []);

  return (
    <>
      <div>
        <header>
          <nav>
            <div className="container">
            </div>
          </nav>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={logo}
              alt="dreambay"
              className="big-title translate"
              data-speed="-0.5"
            />
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

        <section className="visible-section">
          <div className="col-12 p-0 red-background">
            <div className="info-box-header">ERFARENHET</div>
            <div className="beige-background">
              <div className="container">
                <div className="p-3 m-0 no-mobile-padding">
                  <div className="col-lg-12 col-md-12 col-xs-12 custom_center py-3">
                    <Card url="https://player.vimeo.com/video/459658560"></Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 p-0 blue-background">
            <div className="info-box-header">VI GÖR FILM</div>
            <div className="d-flex justify-content-center align-items-center flex-column purple-background">
              <div className="m-4">
                <div
                  className="col-xs-12 col-md-8 white-background blue-text container"
                  style={{ maxWidth: "1000px" }}
                >
                  Dreambay är en kreativ studio som kombinerar design, animation
                  och film för att leverera rörligt material med stark
                  personlighet. Med en öppen och ärlig kundkontakt ser vi till
                  att ro dina drömmar i hamn. Med vår breda kunskap inom
                  animation och unika studio på östgöta landsbygd kan vi skapa
                  det omöjliga. Vad vill du berätta och hur vill du berätta det?
                </div>
                <div
                  className="row my-4 justify-content-center align-items-center"
                  style={{ maxWidth: "1000px" }}
                >
                  <div className="custom-gif d-flex justify-content-center">
                    <img
                      className="image-smaller-mobile"
                      src={flyingGif}
                      alt="2D"
                    ></img>
                  </div>

                  <div className="custom-gif d-flex justify-content-center">
                    <img
                      className="image-smaller-mobile"
                      src={houseGif}
                      alt="3D"
                    ></img>
                  </div>

                  <div className="col-xs-12 d-flex justify-content-center">
                    <img
                      className="image-smaller-mobile"
                      src={vfxGif}
                      alt="VFX"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 p-0 beige-background-2 ">
            <div className="info-box-header">KONTAKTA OSS</div>
            <div className="custom_line"></div>
            <div className="beige-background-3 text-center">
              <div className="container">
                Vill du sammarbeta eller har en idé eller ett projekt du vill se
                framför dig? Hör av dig så bollar vi vidare hur vi kan
                förverkliga dem.
                <div className="col d-flex flex-column my-2 mx-0">
                  <a
                    style={{ color: "#AC390C" }}
                    href="mailto:info@dreambay.se"
                  >
                    info@dreambay.se
                  </a>
                  <a style={{ color: "#AC390C" }} href="phoneto:0703912946">
                    0703912946
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <Footer></Footer> */}
      </div>
    </>
  );
}

export default App;
