import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import { brown } from "@mui/material/colors";
import "../MyComm/MyComm.css";

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
  return (
    <div className="myCom">
      <h1>Welcome court!</h1>
      {/* if user exists show user.username if not (ternary) show null
      {user ? message : null} */}
      {/* fancy stuff to make username appear here^ (like props or sum) */}

      <h3 id="left">My Dietary Groups</h3>
      <ColorButton variant="contained">
        <a href="/commForm" id="link">
          Create Community
        </a>
      </ColorButton>
      <div className="circles">
        <div id="roundP"> Vegan</div>
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
