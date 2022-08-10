// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Button from "@mui/material/Button";
// import { AuthContextProvider, useAuthContext } from "../../../AuthContext/auth";
// import { brown } from "@mui/material/colors";

// import { useState, useEffect } from "react";
// import apiClient from "../../../services/apiClient";
// import { Container } from "@mui/system";

// // const ColorButton = styled(Button)(({ theme }) => ({
// //   fontFamily: "Inter, Avenir, Helvetica, Arial, sans-serif",
// //   float: "right",
// //   color: theme.palette.getContrastText(brown[500]),
// //   backgroundColor: brown[500],
// //   "&:hover": {
// //     backgroundColor: brown[700],
// //   },
// //   alignItems: "center",
// // }));
// export default function MyComm() {
//   const { user, setUser } = useAuthContext(); //from prof
//   const [userRestrictions, setUserRestrictions] = useState([]);
//   React.useEffect(() => {
//     console.log("user in prof :", user);
//   }, [user]);
//   React.useEffect(() => {
//     async function getRestrictions() {
//       const res = await apiClient.listUserRestrictions();
//       setUserRestrictions(res.data.restrictions);
//       console.log("res", res.data.restrictions);
//     }
//     getRestrictions();
//   }, []);
//   return (
//     <Container
//       className="myCom"
//       sx={{
//         flexGrow: 1,
//         // alignItems: "stretch",
//         display: "flex",
//         flexDirection: "column",
//       }}
//       maxWidth={false}
//     >
//       {/* <div className="myCom"> */}
//       <h1>Welcome {user ? user.username : null}</h1>
//       {/* to upper/title here */}
//       <h3 id="left">My Info</h3>
//       <div>
//         <h3 id="left">My Restrictions</h3>
//         <div className="circles">
//           {/* {userRestrictions.map()} */}
//           {/* {userRestrictions.map(({ i, restriction }) => {
//           return (
//             <div>
//               <p> {userRestrictions.restriction[name]}</p>

//               <p> {restriction.type}</p>
//             </div>
//           );
//         })} */}

//           <div id="roundP"> </div>
//           {/* trying to put in {userRestrictions} */}
//           <div id="roundP"> Keto </div>
//           <div id="roundP"> Cheeseterian</div>
//         </div>
//       </div>

//       <h3 id="left">My Communities</h3>
//       <div className="circles">
//         <div id="rect"> USC milk lovers</div>

//         <div id="rect"> LA area candy outings</div>
//         <div id="rect"> Reusable foodies</div>
//       </div>

//       <button className="liBrB">{"v"}</button>
//       {/* load more */}
//       {/* </div> */}
//     </Container>
//   );
// }

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import { Card } from "@mui/material";
import { AuthContextProvider, useAuthContext } from "../../../AuthContext/auth";
import { Container } from "@mui/system";
import "../MyComm/MyComm.css";
import { useState, useEffect } from "react";
import apiClient from "../../../services/apiClient";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // change color of grid bground
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MyComm() {
  const { user, setUser } = useAuthContext(); //from prof
  const [userRestrictions, setUserRestrictions] = useState([]);
  const [diets, setDie] = useState([]);
  const [allergies, setAlls] = useState([]);
  // console.log(user.school_id);
  useEffect(() => {
    async function getDiets() {
      const res = await apiClient.listDiets();
      setDie(res.data.diets);
    }
    getDiets();
  }, []);

  useEffect(() => {
    async function getAlls() {
      const res = await apiClient.listAllergies();
      setAlls(res.data.allergies);
    }
    getAlls();
  }, []);

  return (
    <Container
      className="myCom"
      sx={{
        flexGrow: 1,
        // alignItems: "stretch",
        display: "flex",
        flexDirection: "column",
        // marginLeft: "1%",
        // marginRight: "1%",
      }}
      maxWidth={false}
    >
      <h1 className="title"> Welcome {user ? user.username : null} </h1>

      <Grid container spacing={1}>
        {/* sx={{ width: "100vw", height: "100vh" }} */}
        <Grid container xs={12} sm={7} lg={9}>
          <Stack spacing={2} flex="1 1">
            {/* before was 1 1 0 */}
            <h3 id="left">My Restrictions</h3>
            <Item>
              <div></div>
              {/* need to widen boxes */}
              <div className="circles">
                {diets.map((diet) => {
                  return (
                    <div className="smoval">
                      {diet.name}
                      {/* <p>{diet.type}</p> */}
                    </div>
                  );
                })}
                {allergies.map((allergy) => {
                  return <div className="smoval2">{allergy.name}</div>;
                })}
              </div>
            </Item>
            <h3 id="left">My Communities</h3>
            <Item>hiiiii</Item>
          </Stack>
        </Grid>

        <Grid
          container
          item
          xs={12}
          sm={5}
          lg={3}
          sx={{ paddingTop: "0", marginTop: "4%" }}
        >
          <Item sx={{ padding: "2%", width: "80%", paddingTop: "0" }}>
            <h3 id="left">My Info</h3>
            <div className="info">
              <p> You are a {user ? user.type : null}</p>

              <p>Email : {user ? user.email : null}</p>
              <p>school info here too</p>
              {/* <p> School : {user ? credentials.school_id : null}</p> */}
            </div>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}
