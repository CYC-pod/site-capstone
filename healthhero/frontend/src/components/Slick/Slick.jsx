import * as React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import "../Slick/Slick.css";
// import USC from "../../img/washu.png"
// import Howard from "/Users/cfenderson/Desktop/CPLabs/site-capstone/healthhero/frontend/src/img/howard.jpeg";
// import WashU from "/Users/cfenderson/Desktop/CPLabs/site-capstone/healthhero/frontend/src/img/washu.png";
// import VT from "/Users/cfenderson/Desktop/CPLabs/site-capstone/healthhero/frontend/src/img/vt.png";
// import USF from "/Users/cfenderson/Desktop/CPLabs/site-capstone/healthhero/frontend/src/img/USF.png";
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
      <div className="controls">
        <button onClick={sliderRef?.slickPrev} id="liBrB">
          <i className="fa-solid fa-chevron-right"></i>
          {/* doesnt work */}
          {"<"}
        </button>
        <button onClick={sliderRef?.slickNext} id="liBrB">
          <i className="fa-solid fa-chevron-right"></i>
          {">"}
        </button>
      </div>
      <div>
        <Slider ref={setSliderRef} {...settings}>
          <div id="schoolHome">
            <img
              src={`data:image/png;base64,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`}
              alt="USC"
            />
          </div>
          <div id="schoolHome">
            <img src={Howard} alt="Howard" />
          </div>
          <div id="schoolHome">
            <img src={WashU} alt="WashU" />
          </div>
          <div id="schoolHome">
            <img src={VT} alt="VT" />
          </div>
          <div id="schoolHome">
            <img src={USF} alt="USF" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

// for more info: https://blog.logrocket.com/create-carousel-react-slick/
