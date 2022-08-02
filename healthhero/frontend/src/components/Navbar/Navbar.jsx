import * as React from "react";
import {Link} from "react-router-dom"
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
import leafLogo from "../../img/Health Hero-2.png"
import apiClient from "../../../services/apiClient";

export default function Navbar({ logoutuser}) {
  const { user, setUser } = useAuthContext();

  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static" style={{ backgroundColor: '#B1907F' }}>
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
          <a href="/communities" id="link"> Communities </a>
          {/* make button/list item */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <a href="/" id="link"> <img className="leaflogo" src={leafLogo} alt="leaflogo"/> </a> 
          </Typography>
          <Button color="inherit" onClick={logoutuser}>
            {user ? "" : <a href="/register" id="link"> Sign Up </a>}
          </Button>
          <Button color="inherit" onClick={logoutuser}>
            {console.log("user in nav bar", user)}
            {user ? <a href="/" id="link"> Logout </a> : <a href="/login" id="link"> Login </a>}
          </Button>
          <Link to="/restForm"> restForm Link </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
