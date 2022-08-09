import * as React from "react";
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
import "./ResGrid.css";
import apiClient from "../../../services/apiClient";

export default function ResGrid() {
  //   const { rest, setRes } = useAuthContext();

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
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    console.log("hiiii");
  }, []);

  useEffect(() => {
    async function getRes() {
      //gets all restaurants that meet one or more of the users requirements
      const res = await apiClient.listMinRestaurants();
      console.log(res);
      setRestaurants(res.data.restaurants);
      console.log("restaurant list", res.data.restaurants);
    }
    getRes();
  }, []);

  useEffect(() => {
    async function getUserRestrictions() {
      const res = await apiClient.listUserRestrictions();
      setUserRestrictions(res.data.restrictions);
      console.log("user restrictions list", res.data.restrictions);
    }
    getUserRestrictions();
  }, []);

  useEffect(() => {
    console.log("filter value is: ", filter);
  }, [filter]);

  useEffect(() => {
    console.log("selected restrictions array", selected);
  }, [selected]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelected(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  let checker = (arr, target) => target.every((v) => arr.includes(v));

  //Step 1 make api call for minrestaurants #
  //Step 1.5 make an api call that gets user restrictions and stores them in an array #
  //step 2 add checkboxes that have user's restrictions #
  /*
  restaurants.filter(restaurant => checker(restaurant.restriction_name, user_restrictions))
  
  let checker = (arr, target) => target.every(v => arr.includes(v));
    target = user selections 
    checker(array2, array1)
  arr would be restaruant restriction list 
*/
  return (
    <Box
      sx={{
        background: "#f4ebd0",
        width: "100%",

        m: 3,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
      }}
    >
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">
            {" "}
            Dietary Options
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={selected}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {userRestrictions.map((restriction) => (
              <MenuItem key={restriction} value={restriction}>
                <Checkbox checked={selected.indexOf(restriction) > -1} />
                <ListItemText primary={restriction} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {restaurants
        .filter((restaurant) => checker(restaurant.restriction_name, selected))
        .map((rest, index) => {
          return (
            <ResCard key={index} rest={rest} />
            // <Box
            //   key={index}
            //   sx={{
            //     background: "yellow",
            //     width: "1in",
            //     height: "1in",
            //     m: 3,
            //     borderRadius: ".5in",
            //     color: "black",
            //   }}
            // >
            //   {index + 1}
            // </Box>
          );
        })}
    </Box>
  );
  return (
    <div className="grid">
      <h1 className="header">Select A Community</h1>
      {community?.map((comm, index) => (
        <ComCard key={index} comm={comm} />
      ))}
    </div>
  );
}
