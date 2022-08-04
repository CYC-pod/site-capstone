import "../ResResults/ResCard.css";
import React from "react";

export default function ResCard({ res }) {
  const { id, image, name, description } = res;
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
