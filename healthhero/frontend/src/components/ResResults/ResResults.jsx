import * as React from "react";
import ResCard from "./ResCard";
import "../ResResults/ResResults.css";

import SearchBar from "material-ui-search-bar";
// import styled from "styled-components";
import { styled } from "@mui/material/styles";

export const StyledSearchBar = styled(SearchBar)`
  margin: 0 auto;
  max-width: 800px;
  margin-top: 100px;
`;

// function displayResults(data) {
//   const resStr = data.results
//     .map(
//       (item) => `

// <div id = "res-card">
//     // <img class = "res-pic" src= from input />

//     // <h3 class = "res-title">${res.title} </h3>
//     <p> res description/>

//     </div>
//     </div>
// `
//     )
//     .join("");
//   dataSec.innerHTML = dataSec.innerHTML + resStr; //rename datasec to be overall container somewhere
// }
export default function ResResults({ resresults = [] }) {
  //figure out props here
  return (
    <div className="resR">
      <div>
        {/* <SearchBar
          onChange={() => console.log("onChange")}
          onRequestSearch={() => console.log("onRequestSearch")}
          style={{
            margin: "0 auto",

            maxWidth: 800,
          }}
        /> */}
        <StyledSearchBar />
      </div>

      <p>dietary groups, allergies, more - filter bar</p>
      <div className="grid">
        {resresults?.map((res) => (
          <ResCard key={res.id} restaurant={res} des={res.description} /> //prob need diets too
        ))}
        {!resresults?.length ? (
          <div className="card">
            <p>No restaurants available</p>
          </div>
        ) : null}
      </div>
      {/* call displayResults here? */}
    </div>
  );
}
