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
import SearchIcon from "@mui/icons-material/Search";

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
  const [filBoxVal, setFilBoxVal] = useState("");

  const handleFilChange = (ev, value) => {
    setFilBoxVal(ev.target.value); //mui is calling

    console.log(value);
  };

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

  const fil = (school) => {
    const { name } = school; //decons
    return name.toLowerCase().includes(filBoxVal.toLowerCase());
  };

  //applying to every el in arr.
  return (
    <div className="viewS">
      <h1>Pick your school</h1>
      <div className="marg">
        <label id="selS">Select your school: </label>
        <div className="flexy">
          <Autocomplete
            onInputChange={handleFilChange}
            sx={{
              display: "inline-block",
              "& input": {
                width: 250,
                height: 25,
                margin: "2%",
                bgcolor: "#cdd7c3",
                color: "rgb(16, 51, 7)",
                borderColor: "rgb(16, 51, 7)",

                // color: (theme) =>
                //   theme.palette.getContrastText(theme.palette.background.paper),
              },
            }}
            id="custom-input-demo"
            options={options}
            renderInput={(params) => (
              <div ref={params.InputProps.ref}>
                <input
                  type="text"
                  {...params.inputProps}
                  placeholder="                    Search schools..."
                  // onChange={handleOnTextChange}
                />
              </div>
            )}
          />

          <SearchIcon id="searchy"> </SearchIcon>
        </div>
      </div>
      <div className="">
        {schools.filter(fil).map((school, i) => {
          //rendering schools

          return (
            <a href="/diet" key={i}>
              <button
                className="schoolButton"
                onClick={() => handleOnSchoolClick(school.id)}
              >
                <div className="schoolHome" id="yas">
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
          <button className="liBrB" id="ma">
            Load more schools
          </button>
        </div>
      </div>
    </div>
  );
}
