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
  // const [comms, setcomms] = useState([]);
  const [communities, setCommunities] = useState([]);
  const [restrictions, setRestrictions] = useState([]);
  // console.log(user.school_id);
  useEffect(() => {
    async function getRest() {
      const res = await apiClient.listUserRestrictionsObj();
      setRestrictions(res.data.restrictions)
    }
    // async function getAlls() {
    //   const res = await apiClient.listAllergies();
    //   setAlls(res.data.allergies);
    // }
    async function getUserComms() {
      const res = await apiClient.listUserComms();
      setCommunities(res?.data?.userCommunities ? [...communities, res?.data?.userCommunities] : []);
      console.log("community list: ", res?.data?.userCommunities);
    }
    // getDiets();
    // getAlls();
    getRest(); 
    getUserComms();
  }, []);

  useEffect(() => {
    console.log("new version diets: ",  diets)
  }, [diets]) 

  useEffect(() => {
    console.log("new version allergeis: ", allergies)
  }, [allergies]) 
 
  useEffect(() => {
    console.log("community array: ", communities);
  }, [communities]);

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
                <div className="circles">
                  {restrictions.filter((restriction) => restriction.type == "diet").map((diet) => {
                    return <div className="smoval">{diet.name}</div>;
                  })}
                  {restrictions.filter((restriction) => restriction.type == "allergy").map((allergy) => {
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
                <div className="circles">
                  {communities?.map((comm) => {
                    return <div className="smoval3">{comm.name}</div>;
                  })}
                </div>
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
              // marginTop: "15%",
            }}
          >
            <h3 id="left">My Info</h3>
            <div className="info">
              <p> You are a {user ? user.type : null}</p>

              <p>Email : {user ? user.email : null}</p>
              {isStudent ? <p>User's school</p> : null}

              {/* <p> School : {user ? credentials.school_id : null}</p> */}
            </div>
          </Box>
          <Box
            sx={{
              backgroundColor: "green",
              borderRadius: "10px",
              height: "3in",
              marginTop: "2%",
            }}
          >
            {isStudent ? (
              <img
                src="data:image/jpeg;base64,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"
                className="padT"
              ></img>
            ) : (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRRaRyk90kcUMsEtMWfDgNMfVKfE1eBNv8FQ&usqp=CAU"
                className="padT"
              ></img>
            )}
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
