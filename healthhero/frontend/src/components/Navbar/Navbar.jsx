import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "../Navbar/Navbar.css";
import { AuthContextProvider, useAuthContext } from "../../../AuthContext/auth";
import App from "../../App";
import leafLogo from "../../img/Health Hero-2.png";
import apiClient from "../../../services/apiClient";

export default function Navbar({ logoutuser }) {
  const { user, setUser } = useAuthContext();

  var isRest = false;
  var isStudent = false;
  if (user?.type == "restaurant owner") {
    console.log("user type in navbar", user.type);
    isRest = true; //yes Restaurant!
    isStudent = false;
  }
  else if(user?.type == "student") //user is student 
  {
    isRest = false;
    isStudent = true; //yes Student!
  }

useEffect(()=>{
    console.log("student:", isStudent)
}, [])

  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static" style={{ backgroundColor: "#B1907F" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {isStudent ? (<Button> <a href="/communities" id="link"> Communities </a> </Button>) : null}
          {isStudent ? (<Button> <a href="/diet" id="link"> Diet </a> </Button>) : null}
          {/* make button/list item */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="/" id="link">
              <img className="leaflogo" src={leafLogo} alt="leaflogo" />{" "}
            </a>
          </Typography>
          <Button color="inherit" onClick={logoutuser}>
            {user ? (
              ""
            ) : (
              <a href="/register" id="link"> Sign Up </a>
            )}
          </Button>
          {isRest ? (<Button> <a href="/restForm" id="link"> Restaurant Form </a> </Button>) : null}
          {isStudent ? (<Button> <a href="/resResults" id="link"> View Restaurants </a> </Button>) : null}
          <Button color="inherit" onClick={logoutuser}>
            {console.log("user in nav bar", user)}
            {user ? (<a href="/" id="link"> Logout </a>) : (<a href="/login" id="link"> Login </a>)}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
