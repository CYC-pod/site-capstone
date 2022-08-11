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
import { Link } from "react-router-dom";
import { brown } from "@mui/material/colors";
// import { CommForm } from "../CommForm/Commform";
import "./SelComm.css";

//style diff based off breakpoints n media query

export default function SelComm() {
  const { comm, setComm } = useAuthContext();
  const { community, setCommunity } = useAuthContext();

  useEffect(() => {
    console.log("comm obj in selComm: ", comm);
  }, [comm]);

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

  const ColorButton1 = styled(Button)(({ theme }) => ({
    fontFamily: "Inter, Avenir, Helvetica, Arial, sans-serif",
    float: "right",
    color: theme.palette.getContrastText(brown[500]),
    backgroundColor: brown[500],
    "&:hover": {
      backgroundColor: brown[700],
    },
    // alignItems: "center",
    // float: "right",
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
      <div className="container">
        <Box
          sx={{
            background: "green",
            width: "50%",
            height: "10vh",
            m: 3,
            padding: "30px",
            marginRight: "100px",
          }}
        >
          <h1> Select A Community</h1>
        </Box>
        <button className="buttoncomm">
          <Link className="link" to="/commForm">
            Create A Community!
          </Link>
        </button>
      </div>
      <ComGrid />
      <Box
        sx={{ background: "darkseagreen", width: "10%", height: "10vh", m: 3 }}
      >
        <ColorButton variant="contained">Load More Options</ColorButton>
      </Box>
    </Container>
  );
}
