import "../ResResults/ResCard.css";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

export function ResCard({ rest, showdescription }) {
  const {
    id,
    image_url,
    name,
    location,
    latitude,
    longitude,
    description,
    restrictions,
  } = rest;
  return (
    <Container className="ResCard" maxWidth={"xs"} sx={{ m: 3 }}>
      {/* <Link to={"/resDescript/" + id}> */}
      <Box sx={{ backgroundColor: "purple" }}>
        <img src={image_url}></img>
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
      </Box>
    </Container>
  );
}

export default function ResCardYas({ rest, showdescription }) {
  const {
    id,
    image_url,
    name,
    location,
    latitude,
    longitude,
    description,
    restrictions,
  } = rest;
  return (
    <Card sx={{ m: 3, maxWidth: { xs: "90%", lg: "30%" } }}>
      <CardHeader title={name} />
      <Link to={"/resDescript/" + id}>
        <CardMedia
          component="img"
          // height="194"
          image={image_url}
        />
      </Link>
      <CardContent>
        <Typography paragraph>
          <p className="location">{location}</p>
          <p className="latitude">{latitude}</p>
          <p className="longitude">{longitude}</p>
          <p className="restrict">{restrictions}</p>

          {showdescription ? (
            <p className="product-description">{description}</p>
          ) : null}
        </Typography>
      </CardContent>
    </Card>
  );
}
