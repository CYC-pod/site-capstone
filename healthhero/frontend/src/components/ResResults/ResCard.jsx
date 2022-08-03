import "../ResResults/ResCard.css";
import React from "react";

export default function ResCard({ res }) {
  const { id, name, image, location, description } = res; //containing them to contain these 3 keys

  return (
    <div className="RestCard">
      <div className="media">
        {res.image ? (
          <img src={image} alt="product cover" />
        ) : //   <img src={codepath} alt="product cover" /> put our own placeholder img here
        null}
      </div>
      <div className="res-info">
        <div className="info">
          <h3 className="res-name">{name}</h3>
          <p className="res-loc">{location}</p>
          <p className="res-des">{description}</p>
        </div>
      </div>
    </div>
  );
}
