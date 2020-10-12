import React, { useState, useEffect } from "react";
import Card from "./card";
import darkLogo from "./assets4/logoDark.png";
import sun from "./assets4/sun.png";
import darkSky from "./assets4/Background.png";
import darkCloud1 from "./assets4/Lager_1.png";
import darkCloud2 from "./assets4/Lager_2.png";
import darkCloud3 from "./assets4/Lager_3.png";
import darkCloud4 from "./assets4/Lager_4.png";
import "./App.scss";

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
        element.style.transform = `translateY(${scroll * -speed}px)`;
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
              <h3 className="logo">
                dream<span>bay</span>
              </h3>
              {/* <img
                src={sunLogo}
                className="hamburger-menu"
                onClick={() => changeViewMode()}
              /> */}
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
          <div className="col-12 p-4 gray-background">
            <div className="info-box-header">ERARENHET</div>
            <div className="custom_line"></div>
            <div className="container">
              <div className="col-lg-12 col-md-12 col-xs-12 custom_center">
                <Card url="https://player.vimeo.com/video/459658560"></Card>
              </div>
            </div>
          </div>
          <div
            className={`col-12 p-4 red-background  info-box ${
              firstBoxVisible ? "info-box-active" : ""
            }`}
            onClick={onFirstBoxClick}
          >
            <div className="info-box-header">OM DREAMBAY</div>
            <div className="custom_line info-box-content"></div>
            <div className="col-xs-12 col-md-8 info-box-content">
              Dreambay är en kreativ studio som lever för att berätta och beröra
              med hjälp av rörliga bilder. Med film, design, VFX, 3D och
              2D-animation kan vi göra just det. Studion ligger ute på
              Östergötlands landsbygd med utrymme till alla tänkbara idéer. Vi
              har möjlighet att leverera filmer i hög nivå till hela Sverige.
            </div>
          </div>

          <div
            className={`col-12 p-4 orange-background  info-box ${
              secondBoxVisible ? "info-box-active" : ""
            }`}
            onClick={onSecondBoxClick}
          >
            <div className="info-box-header">VI GÖR FILM</div>
            <div className="custom_line info-box-content"></div>
            <div className="col-xs-12 col-md-8 info-box-content">
              Dreambay är en kreativ studio som lever för att berätta och beröra
              med hjälp av rörliga bilder. Med film, design, VFX, 3D och
              2D-animation kan vi göra just det. Studion ligger ute på
              Östergötlands landsbygd med utrymme till alla tänkbara idéer. Vi
              har möjlighet att leverera filmer i hög nivå till hela Sverige.
            </div>
          </div>

          <div className="col-12 beige-background p-4 d-flex align-items-center flex-column ">
            <div className="info-box-header">KONTAKTA OSS</div>
            <div className="custom_line"></div>
            <div
              className="col-xs-12 col-md-8 text-center"
              style={{ padding: "20px" }}
            >
              Vill du sammarbeta eller har du en idé eller ett projekt du vill
              se framför dig? Hör av dig så bollar vi vidare hur vi kan
              förverkliga den.
              <div className="col d-flex flex-column my-2 mx-0">
                <a
                  style={{ color: "#AC390C" }}
                  href="mailto:gustav@dreambay.se"
                >
                  gustav@dreambay.se
                </a>
                <a style={{ color: "#AC390C" }} href="phoneto:0703912946">
                  0703912946
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
