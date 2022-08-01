import * as React from "react";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "../Slick/Slick.css";
import { HSSU, USC, HU, washu, VT, USF, UTEP } from "../../constants";

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

  function cacheImages(array) {
    if (!cacheImages.list) {
      cacheImages.list = [];
    }
    var list = cacheImages.list;
    for (var i = 0; i < array.length; i++) {
      var img = new Image();
      img.onload = function () {
        var index = list.indexOf(this);
        if (index !== -1) {
          // remove image from the array once it's loaded
          // for memory consumption reasons
          list.splice(index, 1);
        }
      };
      list.push(img);
      img.src = array[i];
    }
  }

  useEffect(() => {
    cacheImages([HSSU, USC, HU, washu, VT, USF, UTEP]);
  }, []);

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
            <img
              src={USC}
              onLoad={() => {
                console.log("loaded");
              }}
              onError={(e) => {
                console.log("on error", e);
              }}
              alt="USC"
            />
          </div>
          <div id="schoolHome">
            <img src={HU} alt="Howard" />
          </div>
          <div id="schoolHome">
            <img src={washu} alt="WashU" />
          </div>
          <div id="schoolHome">
            {/* <img src={VT} alt="VT" /> */}
            <img src="/healthhero/frontend/src/img/vtt.png"></img>
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
