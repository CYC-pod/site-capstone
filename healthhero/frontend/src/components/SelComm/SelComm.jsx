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
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

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
            padding: "20px",
            marginLeft: "200px",
            // justifyContent: "center",
            borderRadius: "7px",
          }}
        >
          <h1> Select A Community</h1>
        </Box>
        <ColorButton1 className="buttoncomm">
          <Link className="link" to="/commForm">
            Create A Community!
          </Link>
        </ColorButton1>
        {/* breakpoint here to layer it */}
      </div>
      <ComGrid />
      <Box
      // sx={{ background: "darkseagreen", width: "10%", height: "10vh", m: 3 }}
      >
        <ColorButton variant="contained" sx={{ marginBottom: "2%" }}>
          Load More Options
        </ColorButton>
      </Box>
    </Container>
  );
}

//   const style = {
//     color: "black",
//     backgroundColor: "FFFAEC",
//   };
//   return (
//     <Stack
//       direction="column"
//       sx={{ flexGrow: 1, marginLeft: "1%", marginRight: "1%" }}
//     >
//       <Box sx={style}>
//         <h1 className="title"> Select Communities </h1>
//       </Box>
//       <Grid container spacing={2} sx={style}>
//         <Grid item xs={12} lg={8}>
//           <Box
//             sx={{
//               background: "green",
//               alignItems: "center",
//               display: "flex",
//               flexDirection: "column",
//               height: "3in",
//             }}
//             maxWidth={false}
//           ></Box>
//         </Grid>
//       </Grid>
//     </Stack>
//   );
// }
