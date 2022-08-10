import "../ResResults/ResCard.css";
import React from "react";
import { Link } from "react-router-dom";

export default function ResCard({ rest, showdescription}) {
  const { id, image_url, name, location, description, restrictions } = rest;
  return (
    <div className="ResCard">
      <Link to={"/resDescript/" + id} className="media">
        {" "}
        <img className="resImage" src={image_url}></img>
      </Link>
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
    </div>
  );
}
