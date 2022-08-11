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

export default function MyComm() {
  const { user, setUser } = useAuthContext(); //from prof
  var isRest = false;
  var isStudent = false;

  if (user?.type == "restaurant owner") {
    console.log("user type in navbar", user.type);
    isRest = true; //yes Restaurant!
    isStudent = false;
  } else if (user?.type == "student") {
    //user is student
    isRest = false;
    isStudent = true; //yes Student!
  }

  // const [userRestrictions, setUserRestrictions] = useState([]);
  const [diets, setDie] = useState([]);
  const [allergies, setAlls] = useState([]);
  const [comms, setcomms] = useState([]);
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

  const style = {
    color: "black",
    backgroundColor: "FFFAEC",
  };
  return (
    <Stack
      direction="column"
      sx={{ flexGrow: 1, marginLeft: "1%", marginRight: "1%" }}
    >
      <Box sx={style}>
        <h1 className="title"> Welcome {user ? user.username : null} </h1>
      </Box>
      <Grid container spacing={2} sx={style}>
        <Grid item xs={12} lg={8}>
          <Box
            sx={{
              backgroundColor: "beige",
              // height: "3in",
              borderRadius: "10px",
            }}
          >
            {isStudent ? (
              <h3 id="left">My Restrictions</h3>
            ) : (
              <h3 id="left">My Restaurants</h3>
            )}
            {/* code for title of upper box dep on user^ */}
            {isStudent ? (
              <div>
                <div></div>

                <div className="circles">
                  {diets.map((diet) => {
                    return <div className="smoval">{diet.name}</div>;
                  })}
                  {allergies.map((allergy) => {
                    return <div className="smoval2">{allergy.name}</div>;
                  })}
                </div>
              </div>
            ) : (
              <div>
                <p>insert res data here</p>
              </div>
            )}
          </Box>
          <Box
            sx={{
              backgroundColor: "darkseagreen",
              height: "3in",
              borderRadius: "10px",
            }}
          >
            {isStudent ? (
              <>
                <h3 id="left">My Communities</h3>
              </>
            ) : null}
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Box
            sx={{
              backgroundColor: "green",
              borderRadius: "10px",
              height: "3in",
            }}
          >
            <h3 id="left">My Info</h3>
            <div className="info">
              <p> You are a {user ? user.type : null}</p>

              <p>Email : {user ? user.email : null}</p>
              {isStudent ? <p>school info here too</p> : null}

              {/* <p> School : {user ? credentials.school_id : null}</p> */}
            </div>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
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
        <Grid container>
          {/* xs={12} sm={7} lg={9} */}
          <Stack spacing={2} flex="1 1">
            {/* before was 1 1 0 */}
          </Stack>
        </Grid>

        <Grid container item sx={{ paddingTop: "0" }}>
          {/* xs={12} sm={5} lg={3} */}
          <div sx={{ padding: "1rem", paddingTop: "0" }}>
            <h3 id="left">My Info</h3>
            <div className="info">
              <p> You are a {user ? user.type : null}</p>

              <p>Email : {user ? user.email : null}</p>
              {isStudent ? <p>school info here too</p> : null}

              {/* <p> School : {user ? credentials.school_id : null}</p> */}
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
