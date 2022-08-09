import "../Restform/Restform.css";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import * as React from "react";
import { useEffect, Text, StyleSheet, TouchableOpacity } from "react";
import { useAuthContext } from "../../../AuthContext/auth";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ResFormCard from "./restformcard";
import apiClient from "../../../services/apiClient";

export default function ViewRes() {
  const { resId, setResId } = useAuthContext();
  const { restaurant, setRestaurant } = useAuthContext();
  useEffect(() => {
    const fetchRestId = async () => {
      const { data, error } = await apiClient.listRestsbyId();
      if (data) setResId(data.restaurant);
    };

    const token = localStorage.getItem("life-starter-token");
    if (token) {
      apiClient.setToken(token);
      fetchRestId();
    }
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
        <h1> View Restaurant</h1>
      </Box>
      <ResFormCard />
      {/* <Box
              sx={{ background: "purple", width: "10%", height: "10vh", m: 3 }}
            ></Box> */}
    </Container>
  );
}
