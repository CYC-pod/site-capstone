import "../ResResults/ResCard.css";
import React from "react";

export default function ResCard({ resres }) {
  const { id, image, name, location, description, restrictions } = resres;
  return (
    <div className="ResCard">
      <Link to={"/resDescript/" + id} className="media">
        {" "}
        <img className="resImage" src={image}></img>
      </Link>
      <div className="resinfo">
        <p className="resname">{name}</p>
        <p className="location">{location}</p>
        <p className="restrict">{restrictions}</p>
        <p className="resdes">{description}</p>
      </div>
    </div>
  );
}
