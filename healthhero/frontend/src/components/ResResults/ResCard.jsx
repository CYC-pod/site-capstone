import "../ResResults/ResCard.css";
import React from "react";

export default function ResCard({ res }) {
  return (
    <div className="RestCard">
      <div className="media">
        {res.image ? (
          <img src={res.image} alt="product cover" />
        ) : //   <img src={codepath} alt="product cover" /> put our own placeholder img here
        null}
      </div>
      <div className="res-info">
        <div className="info">
          <p className="res-name">{res}</p>
          <p className="res-des">{res.description}</p>
        </div>
      </div>
    </div>
  );
}
