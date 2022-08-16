import * as React from "react";

import { Container } from "@mui/system";

import ResGrid from "./ResGrid";
import { useEffect, useState, Text, StyleSheet, TouchableOpacity } from "react";
import { useAuthContext } from "../../../AuthContext/auth";
import ResCard from "./ResCard";
import { Box } from "@mui/system";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import "../ResResults/ResResults.css";
import apiClient from "../../../services/apiClient";

// export function ResResults() {
//   // const { resres, setRes } = useAuthContext();
//   // const { restaurant, setRestaurant } = useAuthContext();

//   useEffect(() => {
//     const fetchRes = async () => {
//       const { data, error } = await apiClient.listres();
//       console.log("data");
//       if (data) setRes(data.restaurant);
//     };

//     const token = localStorage.getItem("life-starter-token");
//     if (token) {
//       apiClient.setToken(token);
//       fetchRes();
//     }

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
//       {/* <div className="container"> */}
//       <Box sx={{ background: "inherit", width: "50%", m: 3 }}>
//         <h1> Your Restaurant Results</h1>
//       </Box>
//       {/* </div> */}
//       <ResGrid />
//       {/* <Box
//           sx={{ background: "purple", width: "10%", height: "10vh", m: 3 }}
//         ></Box> */}
//     </Container>
//   );
// }

export default function Test() {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const [restaurants, setRestaurants] = useState([]);
  const [filter, setFilter] = useState("");
  const [userRestrictions, setUserRestrictions] = useState([]);
  const [diets, setDiets] = useState([]);
  const [allergies, setAllergies] = useState([]);
  const [selectedDiet, setSelectedDiet] = useState([]);
  const [selectedAllergy, setSelectedAllergy] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    async function getRes() {
      //gets all restaurants that meet one or more of the users requirements
      const res = await apiClient.listMinRestaurants();
      console.log(res);
      setRestaurants(res.data.restaurants);
      console.log("restaurant list: ", res.data.restaurants);
    }
    async function getUserRestrictions() {
      const res = await apiClient.listUserRestrictions();
      setUserRestrictions(res.data.restrictions);
      console.log("user restrictions list", res.data.restrictions);
    }
    async function getDiets() {
      const res = await apiClient.listDiets();
      console.log("diets list", res.data.diets);
      setDiets(res.data.diets); //this needs to change
    }
    async function getAllergies() {
      const res = await apiClient.listAllergies();
      setAllergies(res.data.allergies); //this need to change
      console.log("allergies list", res.data.allergies);
    }
    console.log("res grid rendering");
    getRes();
    getUserRestrictions();
    getDiets();
    getAllergies();
  }, []);

  // useEffect(() => {
  //   console.log("allergies from api call: " , allergies)
  // }, [])

  // useEffect(() => {
  //   console.log("diets from api call: " , diets)
  // }, [])

  // useEffect(() => {
  //   console.log("filter value is: ", filter);
  // }, [filter]);

  useEffect(() => {
    console.log("selected restrictions array", selected);
  }, [selected]);

  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedDiet(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedAllergy(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  useEffect(() => {
    setSelected([...selectedDiet, ...selectedAllergy]);
  }, [selectedDiet, selectedAllergy]);

  let checker = (arr, target) => target.every((v) => arr.includes(v));

  const Filter = () => {
    return (
      <>
        <h1 className="green"> Your Restaurant Results</h1>
        <FormControl sx={{ m: 1, width: 300, alignSelf: "center" }}>
          <InputLabel id="demo-multiple-checkbox-label">Diets</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={selectedDiet}
            onChange={handleChange1}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selectedDiet) => selectedDiet.join(", ")}
            MenuProps={MenuProps}
          >
            {diets.map((restriction) => (
              <MenuItem key={restriction.name} value={restriction.name}>
                <Checkbox
                  checked={selectedDiet.indexOf(restriction.name) > -1}
                />
                <ListItemText primary={restriction.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: 300, alignSelf: "center" }}>
          <InputLabel id="demo-multiple-checkbox-label">Allergies</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={selectedAllergy}
            onChange={handleChange2}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selectedAllergy) => selectedAllergy.join(", ")}
            MenuProps={MenuProps}
          >
            {allergies.map((restriction) => (
              <MenuItem key={restriction.name} value={restriction.name}>
                <Checkbox
                  checked={selectedAllergy.indexOf(restriction.name) > -1}
                />
                <ListItemText primary={restriction.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </>
    );
  };
  return (
    <>
      <Filter />

      <Container
        className="test"
        sx={{
          flexGrow: 1,

          // height: "3in",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignContent: "flex-start",
          borderRadius: "10px",
        }} //2 brackets for its object.. setting the container
        maxWidth={false}
      >
        {/* {[...Array(15)].map((e) => */}
        {/* {map((e) => */}
        {restaurants
          .filter((restaurant) =>
            checker(restaurant.restriction_name, selected)
          )
          .map((rest, index) => {
            console.log("selected array in map: ", selected);
            return <ResCard key={index} rest={rest} showdescription={false} />;
          })}
        {/* )} */}
      </Container>
    </>
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
