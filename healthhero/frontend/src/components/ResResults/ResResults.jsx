import * as React from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import ResCard from "./ResCard";
import { useEffect } from "react";
import { useAuthContext } from "../../../AuthContext/auth";
import ResGrid from "./ResGrid";
import "../ResResults/ResResults.css";

export default function SelRes() {
  const { resres, setRes } = useAuthContext();
  const { restaurant, setRestaurant } = useAuthContext();
  useEffect(() => {
    const fetchRes = async () => {
      const { data, error } = await apiClient.listres();
      console.log("data");
      if (data) setRes(data.restaurant);
    };

    const token = localStorage.getItem("life-starter-token");
    if (token) {
      apiClient.setToken(token);
      fetchRes();
    }

    console.log("hii");
  }, []);
  return (
    <Container
      className="restaurants"
      sx={{
        flexGrow: 1,
        background: "#f4ebd0",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }} //2 brackets for its object.. setting the container
      maxWidth={false}
    >
      <Box sx={{ background: "inherit", width: "50%", height: "10vh", m: 3 }}>
        <h1> Your Restaurant Results</h1>
        <ResGrid />
      </Box>

      {/* <Box
          sx={{ background: "purple", width: "10%", height: "10vh", m: 3 }}
        ></Box> */}
    </Container>
  );
}

// import * as React from "react";
// import ResCard from "./ResCard";
// import "../ResResults/ResResults.css";

// import SearchBar from "material-ui-search-bar";
// // import styled from "styled-components";
// import { styled } from "@mui/material/styles";

// export const StyledSearchBar = styled(SearchBar)`
//   margin: 0 auto;
//   max-width: 800px;
//   margin-top: 100px;
// `;

// // function displayResults(data) {
// //   const resStr = data.results
// //     .map(
// //       (item) => `

// // <div id = "res-card">
// //     // <img class = "res-pic" src= from input />

// //     // <h3 class = "res-title">${res.title} </h3>
// //     <p> res description/>

// //     </div>
// //     </div>
// // `
// //     )
// //     .join("");
// //   dataSec.innerHTML = dataSec.innerHTML + resStr; //rename datasec to be overall container somewhere
// // }
// export default function ResResults({ resresults = [] }) {
//   //figure out props here
//   return (
//     <div className="resR">
//       <div>
//         {/* <SearchBar
//           onChange={() => console.log("onChange")}
//           onRequestSearch={() => console.log("onRequestSearch")}
//           style={{
//             margin: "0 auto",

//             maxWidth: 800,
//           }}
//         /> */}
//         <StyledSearchBar />
//       </div>

//       <p>dietary groups, allergies, more - filter bar</p>
//       <div className="grid">
//         {resresults?.map((res) => (
//           <ResCard key={res.id} restaurant={res} des={res.description} /> //prob need diets too
//         ))}
//         {!resresults?.length ? (
//           <div className="card">
//             <p>No restaurants available</p>
//           </div>
//         ) : null}
//       </div>
//       {/* call displayResults here? */}
//     </div>
//   );
// 
 

 //tried this verison with moe, didnt work shows no restaurant but console logged the data array of restuarants
//  import * as React from "react";
// import { Box } from "@mui/material";
// import { Container } from "@mui/system";
// import ResCard from "./ResCard";
// import { useEffect } from "react";
// import { useAuthContext } from "../../../AuthContext/auth";
// import ResGrid from "./ResGrid";
// import "../ResResults/ResResults.css";
// import apiClient from "../../../services/apiClient";
// import { useState } from "react";

// export default function SelRes() {
//   // const { resres, setRes } = useAuthContext();
//   const [ res, setRes ] = useState({});
//   useEffect(() => {
//     const fetchRes = async () => {
//       const { data, error } = await apiClient.listres();
//       console.log("rest data", data);
//       if (data) setRes(data.restaurant);
//     };
//     fetchRes();

//     console.log("hii");
//   }, []);
//   return (
//     <Container
//       className="restaurants"
//       sx={{
//         flexGrow: 1,
//         background: "#f4ebd0",
//         alignItems: "center",
//         display: "flex",
//         flexDirection: "column",
//       }} //2 brackets for its object.. setting the container
//       maxWidth={false}
//     >
//       <Box sx={{ background: "inherit", width: "50%", height: "10vh", m: 3 }}>
//         <h1> Your Restaurant Results</h1>
//         <ResGrid />
//       </Box>

//       {/* <Box
//           sx={{ background: "purple", width: "10%", height: "10vh", m: 3 }}
//         ></Box> */}
//     </Container>
//   );
// }
