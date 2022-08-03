import * as React from "react";
import { useEffect, useState, Text, StyleSheet, TouchableOpacity } from "react";
import { useAuthContext } from "../../../AuthContext/auth";
import Comcard from "./Comcard";
import { Box } from "@mui/system";
// import { CommForm } from "../CommForm/Commform";
import "./SelComm.css";
import apiClient from "../../../services/apiClient";

export default function ComGrid() {
  const { comm, setComm } = useAuthContext();
  const [communities, setCommunities] = useState([]);
  useEffect(() => {
    async function Getcomm() {
      const res = await apiClient.listcomm();
      console.log(res);
      setCommunities(res.data.community);
      console.log("community list", res.data.community);
    }
    Getcomm();
  }, []);
  return (
    <Box
      sx={{
        background: "white",
        width: "80%",

        m: 3,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
      }}
    >
      {communities.map((comm, index) => {
        return (
          <Comcard key={index} comm={comm} />
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
