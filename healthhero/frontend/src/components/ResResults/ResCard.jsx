import "../ResResults/ResCard.css";
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

export default function ResCard({ rest, showdescription }) {
  const { id, image_url, name, location, description, restrictions } = rest;
  return (
    <Container className="ResCard" maxWidth={"xs"} sx={{ m: 3 }}>
      {/* <Link to={"/resDescript/" + id}> */}
      <img className="resImage" src={image_url}></img>
      {/* </Link> */}
      <div className="resinfo">
        <p className="resname">{name}</p>
        <p className="location">{location}</p>
        <p className="restrict">{restrictions}</p>
        <p className="resdes">
          {showdescription ? (
            <p className="product-description">{description}</p>
          ) : null}
        </p>
      </div>
    </Container>
  );
}
