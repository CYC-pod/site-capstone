import * as React from "react";
import "../SchoolsView/SchoolsView.css";
import Autocomplete from "@mui/material/Autocomplete";
import { useState, Link, useEffect } from "react";
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
import apiClient from "../../../services/apiClient";
import { Navigate } from "react-router-dom";

const options = [
  "University of South California",
  "Howard",
  "Washington University in St Louis",
];

const handleOnSchoolClick = async (schoolId) => {
  try {
    console.log(schoolId);
    const res = await apiClient.addSchoolToUser(schoolId);
  } catch (err) {
    console.log(err);
    const message = err?.response?.data?.error?.message;
    setErrors((e) => ({
      ...e,
      form: message ? String(message) : String(err),
    }));
  }
};

export default function SchoolsView() {
  const [schools, setSchools] = useState([]);
  // const [searchText, setSearchText] = useState("");
  // const handleOnTextChange = (event) => {
  //   setSearchText(event.target.value);
  // };
  // //console.log(products);
  // var searching = options.filter((element) => {
  //   return element.name.toLowerCase().includes(searchText.toLowerCase());
  // });
  //build more on school data.

  useEffect(() => {
    async function getSchools() {
      const res = await apiClient.listSchools();
      setSchools(res.data.schools);
      console.log("school list", res.data.schools);
    }
    getSchools();
  }, []);

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
        {schools.map((school, i) => {
          return (
            <a href="/diet">
              <button
                className="schoolButton"
                onClick={() => handleOnSchoolClick(school.id)}
                key={i}
              >
                <div className="schoolHome">
                  <img src={school.image} alt={school.name} />
                </div>
              </button>
            </a>
          );
        })}

        {/* // <div className="schoolImgs">
        //   <button>
        //     <div className="schoolHome">
        //       <img src={USC} alt="USC" />
        //     </div>
        //   </button>
        //   <button>
        //     <div className="schoolHome">
        //       <img src={HU} alt="Howard" />
        //     </div>
        //   </button>
        //   <button>
        //     <div className="schoolHome">
        //       <img src={washu} alt="WashU" />
        //     </div>
        //   </button>
        //   <button>
        //     <div className="schoolHome">
        //       <img src={VT} alt="VT" />
        //     </div>
        //   </button>
        //   <button>
        //     <div className="schoolHome">
        //       <img src={USF} alt="USF" />
        //     </div>
        //   </button>
        //   <button>
        //     <div className="schoolHome">
        //       <img src={HSSU} alt="HSSU" />
        //     </div>
        //   </button>
        //   <button>
        //     <div className="schoolHome">
        //       <img src={UTEP} alt="uni of Texas El Paso" />
        //     </div>
        //   </button>
        //   <button>
        //     <div className="schoolHome">
        //       <img src={SLU} alt="Saint Louis Uni" />
        //     </div>
        //   </button>
        //   <button>
        //     <div className="schoolHome">
        //       <img src={MI} alt="MI " />
        //     </div>
        //   </button>
        //   <button>
        //     <div className="schoolHome">
        //       <img src={spel} alt="Spelman " />
        //     </div>
        //   </button>
        //   <button>
        //     <div className="schoolHome">
        //       <img src={Ber} alt="Berkley " />
        //     </div>
        //   </button>
        //   <button>
        //     <div className="schoolHome">
        //       <img src={Stan} alt="Stanford " />
        //     </div>
        //   </button>
        // </div> */}
        <div>
          <button className="liBrB">Load more schools</button>
        </div>
      </div>
    </div>
  );
}
