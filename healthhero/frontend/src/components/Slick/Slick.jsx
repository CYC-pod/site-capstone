import * as React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import "../Slick/Slick.css";
import { HSSU } from "../../constants";
import { USC } from "../../constants";
import { HU } from "../../constants";
import { washu } from "../../constants";
import { VT } from "../../constants";
import { USF } from "../../constants";
import { UTEP } from "../../constants";

export default function Slick() {
  <script
    src="https://kit.fontawesome.com/cf9f7f67f7.js"
    crossorigin="anonymous"
  ></script>;
  const [sliderRef, setSliderRef] = useState(null);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="content">
      <div className="leftbtton">
        <button onClick={sliderRef?.slickPrev} className="liBrB butRight">
          {"<"}
        </button>
      </div>

      <div className="slider">
        <Slider ref={setSliderRef} {...settings}>
          <div id="schoolHome">
            <img src={USC} alt="USC" />
          </div>
          <div id="schoolHome">
            <img src={HU} alt="Howard" />
          </div>
          <div id="schoolHome">
            <img src={washu} alt="WashU" />
          </div>
          <div id="schoolHome">
            <img src={VT} alt="VT" />
          </div>
          <div id="schoolHome">
            <img src={USF} alt="USF" />
          </div>
          <div id="schoolHome">
            <img src={HSSU} alt="HSSU" />
          </div>
          <div id="schoolHome">
            <img src={UTEP} alt="uni of Texas El Paso" />
          </div>
        </Slider>
      </div>

      <div className="rightbtton">
        <button onClick={sliderRef?.slickNext} className="liBrB butLeft">
          {">"}
        </button>
      </div>
    </div>
  );
}

// for more info: https://blog.logrocket.com/create-carousel-react-slick/
