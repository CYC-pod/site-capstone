import "../ResResults/ResCard.css";
import React from "react";
import { Link } from "react-router-dom";

export default function ResCard({ rest }) {
  const { id, image, name, description } = rest;
  return (
    <div className="ResCard">
      <Link to={"/resDescript/" + id} className="media">
        <img className="resImage" src={image}></img>
      </Link>
      <div className="resinfo">
        <p className="resname">{name}</p>
        {/* <p className="resloc">{location}</p> */}
        <p className="resdes">{description}</p>
      </div>
    </div>
  );
}
