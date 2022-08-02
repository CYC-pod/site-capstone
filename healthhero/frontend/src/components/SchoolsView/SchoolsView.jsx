import * as React from "react";
import "../SchoolsView/SchoolsView.css";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { HSSU } from "../../constants";
import { USC } from "../../constants";
import { HU } from "../../constants";
import { washu } from "../../constants";
import { VT } from "../../constants";
import { USF } from "../../constants";
import { UTEP } from "../../constants";
import { SLU } from "../../constants";
import { MI } from "../../constants";
import { Ber } from "../../constants";
import { Stan } from "../../constants";
import { spel } from "../../constants";
const options = [
  "University of South California",
  "Howard",
  "Washington University in St Louis",
];

export default function SchoolsView() {
  // const [searchText, setSearchText] = useState("");
  // const handleOnTextChange = (event) => {
  //   setSearchText(event.target.value);
  // };
  // //console.log(products);
  // var searching = options.filter((element) => {
  //   return element.name.toLowerCase().includes(searchText.toLowerCase());
  // });
  //build more on school data.
  return (
    <div className="viewS">
      <h1>Pick your school</h1>
      <label id="selS">Select your school: </label>
      <Autocomplete
        sx={{
          display: "inline-block",
          "& input": {
            width: 200,
            height: 25,
            bgcolor: "background.paper",
            color: (theme) =>
              theme.palette.getContrastText(theme.palette.background.paper),
          },
        }}
        id="custom-input-demo"
        options={options}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input
              type="text"
              {...params.inputProps}
              placeholder="             Search schools..."
              // onChange={handleOnTextChange}
            />
          </div>
        )}
      />
      <div className="">
        <div className="schoolImgs">
          <button>
            <div id="schoolHome">
              <img src={USC} alt="USC" />
            </div>
          </button>
          <button>
            <div id="schoolHome">
              <img src={HU} alt="Howard" />
            </div>
          </button>
          <button>
            <div id="schoolHome">
              <img src={washu} alt="WashU" />
            </div>
          </button>
          <button>
            <div id="schoolHome">
              <img src={VT} alt="VT" />
            </div>
          </button>
          <button>
            <div id="schoolHome">
              <img src={USF} alt="USF" />
            </div>
          </button>
          <button>
            <div id="schoolHome">
              <img src={HSSU} alt="HSSU" />
            </div>
          </button>
          <button>
            <div id="schoolHome">
              <img src={UTEP} alt="uni of Texas El Paso" />
            </div>
          </button>
          <button>
            <div id="schoolHome">
              <img src={SLU} alt="Saint Louis Uni" />
            </div>
          </button>
          <button>
            <div id="schoolHome">
              <img src={MI} alt="MI " />
            </div>
          </button>
          <button>
            <div id="schoolHome">
              <img src={spel} alt="Spelman " />
            </div>
          </button>
          <button>
            <div id="schoolHome">
              <img src={Ber} alt="Berkley " />
            </div>
          </button>
          <button>
            <div id="schoolHome">
              <img src={Stan} alt="Stanford " />
            </div>
          </button>
        </div>
        <button className="liBrB">Load more schools</button>
      </div>
    </div>
  );
}
