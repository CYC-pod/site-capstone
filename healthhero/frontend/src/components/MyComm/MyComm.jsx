import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { AuthContextProvider, useAuthContext } from "../../../AuthContext/auth";
import { brown } from "@mui/material/colors";
import "../MyComm/MyComm.css";
import { useState, useEffect } from "react";
import apiClient from "../../../services/apiClient";

const ColorButton = styled(Button)(({ theme }) => ({
  fontFamily: "Inter, Avenir, Helvetica, Arial, sans-serif",
  float: "right",
  color: theme.palette.getContrastText(brown[500]),
  backgroundColor: brown[500],
  "&:hover": {
    backgroundColor: brown[700],
  },
  alignItems: "center",
}));
export default function MyComm() {
  const { user, setUser } = useAuthContext(); //from prof
  const [userRestrictions, setUserRestrictions] = useState([]);
  React.useEffect(() => {
    console.log("user in prof :", user);
  }, [user]);
  React.useEffect(() => {
    async function getRestrictions() {
      const res = await apiClient.listUserRestrictions();
      setUserRestrictions(res.data.restrictions);
      console.log("res", res.data.restrictions);
    }
    getRestrictions();
  }, []);
  return (
    <div className="myCom">
      <h1>Welcome {user ? user.username : null}</h1>
      {/* to upper */}

      <h3 id="left">My Restrictions</h3>
      {/* <ColorButton variant="contained">
        <a href="/commForm" id="link">
          Create Community
        </a>
      </ColorButton> */}
      <div className="circles">
        {/* {userRestrictions.map()} */}
        {userRestrictions.map(({ i, restriction }) => {
          return (
            <div>
              <p> {userRestrictions.restrictions[name]}</p>

              <p> {restriction.type}</p>
            </div>
          );
        })}

        <div id="roundP"> </div>
        {/* trying to put in {userRestrictions} */}
        <div id="roundP"> Keto </div>
        <div id="roundP"> Cheeseterian</div>
      </div>
      <h3 id="left">My Communities</h3>
      <div className="circles">
        <div id="rect"> USC milk lovers</div>

        <div id="rect"> LA area candy outings</div>
        <div id="rect"> Reusable foodies</div>
      </div>

      <button className="liBrB">{"v"}</button>
      {/* load more */}
    </div>
  );
}
