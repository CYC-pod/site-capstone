import { Box } from "@mui/material";
import { Container } from "@mui/system";
import * as React from "react";
import { useEffect, Text, StyleSheet, TouchableOpacity } from "react";
import { useAuthContext } from "../../../AuthContext/auth";
// import ComCard from "./Comcard";
import ComGrid from "./ComGrid";
// import { CommForm } from "../CommForm/Commform";
import "./SelComm.css";

export default function SelComm() {
  const { comm, setComm } = useAuthContext();
  const { community, setCommunity } = useAuthContext();
  useEffect(() => {
    const fetchComm = async () => {
      const { data, error } = await apiClient.listcomm();
      if (data) setComm(data.community);
    };

    const token = localStorage.getItem("life-starter-token");
    if (token) {
      apiClient.setToken(token);
      fetchComm();
    }
  }, []);
  return (
    <Container
      className="communities"
      sx={{
        flexGrow: 1,
        background: "pink",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }} //2 brackets for its object.. setting the container
      maxWidth={false}
    >
      <Box sx={{ background: "red", width: "50%", height: "10vh", m: 3 }}></Box>
      <ComGrid />
      <Box
        sx={{ background: "purple", width: "10%", height: "10vh", m: 3 }}
      ></Box>
    </Container>
  );
}
