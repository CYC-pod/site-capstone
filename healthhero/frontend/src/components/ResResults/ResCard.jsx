import "../ResResults/ResCard.css";
import React from "react";

export default function ResCard({ rest }) {
  const { id, image_url, name, description } = rest;
  return (
    <div className="ResCard">
      <Link to={"/resDescript/" + id} className="media">
        <img className="resImage" src={image_url}></img>
      </Link>
      <div className="resinfo">
        <p className="resname">{name}</p>
        {/* <p className="resloc">{location}</p> */}
        <p className="resdes">{description}</p>
      </div>
    </div>
  );
}
