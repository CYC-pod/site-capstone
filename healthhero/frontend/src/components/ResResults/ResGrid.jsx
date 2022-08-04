import * as React from "react";
import { useEffect, useState, Text, StyleSheet, TouchableOpacity } from "react";
import { useAuthContext } from "../../../AuthContext/auth";
import ResCard from "./ResCard";
import { Box } from "@mui/system";
// import { CommForm } from "../CommForm/Commform";
import "./ResGrid.css";
import apiClient from "../../../services/apiClient";

export default function ResGrid() {
  const { res, setRes } = useAuthContext();
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    async function Getres() {
      const res = await apiClient.listres();
      console.log(res);
      setRestaurants(res.data.restaurant);
      console.log("restaurant list", res.data.restaurant);
    }
    Getres();
  }, []);
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
      {restaurant.map((res, index) => {
        return (
          <ResCard key={index} res={res} />
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
