import * as React from "react";
import "../SchoolsView/SchoolsView.css";
// import USC from "frontend/src/img/LicenseHeader229UofSouthernCal_2SportStyleUSC_132524476454863670.webp";
// import Howard from "/Users/cfenderson/Desktop/CPLabs/site-capstone/healthhero/frontend/src/img/howard.jpeg";
// import WashU from "/Users/cfenderson/Desktop/CPLabs/site-capstone/healthhero/frontend/src/img/washu.png";
// import VT from "/Users/cfenderson/Desktop/CPLabs/site-capstone/healthhero/frontend/src/img/vt.png";
// import USF from "/Users/cfenderson/Desktop/CPLabs/site-capstone/healthhero/frontend/src/img/USF.png";



export default function SchoolsView() {
  return (
    <div className="">
      <h1>Pick your school</h1>
      <div className="schoolImgs">
        <div id="schoolHome">
          <img src={`https://media.defense.gov/2020/Apr/28/2002543434/-1/-1/0/200428-N-NO090-1004.PNG`} alt="USC" />
        </div>
        {/* <div id="schoolHome">
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
        </div> */}
      </div>
      <button id="liBrB">Load more schools</button>
    </div>
  );
}
