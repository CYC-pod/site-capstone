import { Box } from "@mui/material";
import { Container } from "@mui/system";
import * as React from "react";
import { useEffect, Text, StyleSheet, TouchableOpacity } from "react";
import { useAuthContext } from "../../../AuthContext/auth";
// import ComCard from "./Comcard";
import ComGrid from "./ComGrid";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { brown } from "@mui/material/colors";
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
  const ColorButton = styled(Button)(({ theme }) => ({
    fontFamily: "Inter, Avenir, Helvetica, Arial, sans-serif",
    color: theme.palette.getContrastText(brown[500]),
    backgroundColor: brown[500],
    "&:hover": {
      backgroundColor: brown[700],
    },
    alignItems: "center",
    marginTop: "20px",
  }));
  return (
    <Container
      className="communities"
      sx={{
        flexGrow: 1,
        background: "cream",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }} //2 brackets for its object.. setting the container
      maxWidth={false}
    >
      <Box sx={{ background: "green", width: "50%", height: "10vh", m: 3 }}>
        <h1> Select A Community</h1>
      </Box>
      <ComGrid />
      <Box
        sx={{ background: "darkseagreen", width: "10%", height: "10vh", m: 3 }}
      >
        <ColorButton variant="contained">Load More Options</ColorButton>
      </Box>
    </Container>
  );
}
