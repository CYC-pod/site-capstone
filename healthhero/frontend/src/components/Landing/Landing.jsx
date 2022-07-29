import "../Landing/Landing.css";

import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Slick from "../Slick/Slick";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import { brown } from "@mui/material/colors";
// import USC from "/Users/cfenderson/Desktop/CPLabs/site-capstone/healthhero/frontend/src/img/LicenseHeader229UofSouthernCal_2SportStyleUSC_132524476454863670.webp";
import Hero from "../HeroBar/Hero";

const ColorButton = styled(Button)(({ theme }) => ({
  //   color: theme.palette.getContrastText(purple[500]),
  //   backgroundColor: purple[500],
  //   "&:hover": {
  //     backgroundColor: purple[700],
  //   },
  fontFamily: "Inter, Avenir, Helvetica, Arial, sans-serif",
  color: theme.palette.getContrastText(brown[500]),
  backgroundColor: brown[500],
  "&:hover": {
    backgroundColor: brown[700],
  },
  alignItems: "center",
  marginLeft: "810px",
  marginTop: "100px",
  //doesnt change anything
}));

<>
  <link
    rel="stylesheet"
    type="text/css"
    charset="UTF-8"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
  />
</>;
export default function Landing() {
  return (
    <>
      <div className="landingPage">
        {/* <div>
        <img src="background: url(leaves.png);" alt="" />
      </div> */}
        <Hero></Hero>
        <h1 className="findYourSchool"> Find Your School! </h1>
        <Slick />

        {/* 
      swiper js for carousel? */}

        {/* // src="LicenseHeader229UofSouthernCal_2SportStyleUSC_132524476454863670.png" */}

        <Stack spacing={2} direction="row">
          <ColorButton variant="contained">
            <a href="/schools" id="link">
              See All Schools
            </a>
          </ColorButton>
        </Stack>
      </div>
    </>
  );
}
